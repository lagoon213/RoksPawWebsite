import { Resend } from "resend";
import {EmailTemplate} from '@/app/components/EmailTemplate';

export async function POST(request: Request) {

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        return Response.json(
            { ok: false, error: { message: "Missing RESEND_API_KEY" } },
            { status: 500 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const formData = await request.formData();

        const name = String(formData.get("name") ?? "");
        const title = String(formData.get("title") ?? "");
        const content = String(formData.get("context") ?? "");
        const contactMethod = String(formData.get("contactMethod") ?? "");
        const contactDetail = String(formData.get("contactDetail") ?? "");
        const honeypot = String(formData.get("website") ?? "");

        if (honeypot) {
            return Response.json({ ok: false, error: { message: "Rejected" } }, { status: 400 });
        }

        if (!name || !title || !content || !contactMethod || !contactDetail) {
            return Response.json({ ok: false, error: { message: "Missing required fields" } }, { status: 400 });
        }

        if (!['call', 'email', 'whatsapp'].includes(contactMethod)) {
            return Response.json({ ok: false, error: { message: "Invalid contact method" } }, { status: 400 });
        }

        if (name.length > 120 || title.length > 140 || content.length > 4000 || contactDetail.length > 120) {
            return Response.json({ ok: false, error: { message: "Input too long" } }, { status: 400 });
        }

        const files = formData
            .getAll("images")
            .filter((v): v is File => v instanceof File);

        if (files.length > 5) {
            return Response.json({ ok: false, error: { message: "Too many files" } }, { status: 400 });
        }

        let totalSize = 0;
        for (const file of files) {
            if (!file.type.startsWith("image/")) {
                return Response.json({ ok: false, error: { message: "Invalid file type" } }, { status: 400 });
            }

            if (file.size > 5 * 1024 * 1024) {
                return Response.json({ ok: false, error: { message: "File too large" } }, { status: 400 });
            }

            totalSize += file.size;
        }

        if (totalSize > 15 * 1024 * 1024) {
            return Response.json({ ok: false, error: { message: "Attachments too large" } }, { status: 400 });
        }

        const attachments = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const base64 = Buffer.from(arrayBuffer).toString("base64");
                return { filename: file.name, content: base64 };
            })
        );

        const { data, error } = await resend.emails.send({
            from: "RoksPaw <contact@rokspaw.nl>",
            to: ["pawelstandowicz@gmail.com"],
            subject: `Contactformulier: ${title}`,
            react: EmailTemplate({
                firstName: name,
                title,
                content,
                contactMethod,
                contactDetail,
                imageCount: files.length,
            }),
            attachments,
        });

        if (error) {
            console.error("RESEND ERROR:", error);
            return Response.json({ ok: false, error: { message: "Unable to send message" } }, { status: 500 });
        }

        return Response.json({ ok: true, data }, { status: 200 });
    } catch (err: unknown) {
        console.error("SEND ERROR:", err);
        return Response.json(
            { ok: false, error: { message: "Unable to send message" } },
            { status: 500 }
        );
    }
}

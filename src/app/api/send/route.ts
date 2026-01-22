import { Resend } from "resend";
import {EmailTemplate} from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    console.log("🔥 API SEND HIT");

    try {
        const formData = await request.formData();

        const name = String(formData.get("name") ?? "");
        const title = String(formData.get("title") ?? "");
        const content = String(formData.get("context") ?? "");
        const contactMethod = String(formData.get("contactMethod") ?? "");

        const files = formData
            .getAll("images")
            .filter((v): v is File => v instanceof File);

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
                imageCount: files.length,
            }),
            attachments,
        });

        if (error) {
            console.error("RESEND ERROR:", error);
            return Response.json({ ok: false, error }, { status: 500 });
        }

        return Response.json({ ok: true, data }, { status: 200 });
    } catch (err: any) {
        console.error("SEND ERROR:", err);
        return Response.json(
            { ok: false, error: { message: err?.message ?? String(err) } },
            { status: 500 }
        );
    }
}

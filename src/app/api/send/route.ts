import { Resend } from "resend";
import {EmailTemplate} from '@/app/components/EmailTemplate';

export const runtime = "nodejs";

export async function POST(request: Request) {
    console.log("🔥 API SEND HIT");

    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            return Response.json(
                {
                    ok: false,
                    error: {
                        message:
                            "Missing RESEND_API_KEY. Add it to your environment (local .env.local or hosting provider env vars).",
                    },
                },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);

        const from = process.env.RESEND_FROM ?? "RoksPaw <contact@rokspaw.nl>";
        const to = (process.env.CONTACT_TO ?? "pawelstandowicz@gmail.com")
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
        if (to.length === 0) {
            return Response.json(
                {
                    ok: false,
                    error: {
                        message:
                            "CONTACT_TO is empty. Provide at least one recipient email (comma-separated supported).",
                    },
                },
                { status: 500 }
            );
        }

        const formData = await request.formData();

        const name = String(formData.get("name") ?? "");
        const title = String(formData.get("title") ?? "");
        const content = String(formData.get("context") ?? "");
        const contactMethod = String(formData.get("contactMethod") ?? "");

        if (!name || !title || !content || !contactMethod) {
            return Response.json(
                {
                    ok: false,
                    error: {
                        message:
                            "Missing required fields: name, title, context, contactMethod.",
                    },
                },
                { status: 400 }
            );
        }

        const files = formData
            .getAll("images")
            .filter((v): v is File => v instanceof File)
            .filter((f) => {
                const size = (f as any)?.size;
                return typeof size === "number" ? size > 0 : true;
            });

        const attachments = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const base64 = Buffer.from(arrayBuffer).toString("base64");
                return { filename: file.name, content: base64 };
            })
        );

        const emailPayload: Parameters<typeof resend.emails.send>[0] = {
            from,
            to,
            subject: `Contactformulier: ${title}`,
            react: EmailTemplate({
                firstName: name,
                title,
                content,
                contactMethod,
                imageCount: files.length,
            }),
        };

        if (attachments.length > 0) {
            (emailPayload as any).attachments = attachments;
        }

        const { data, error } = await resend.emails.send(emailPayload);

        if (error) {
            console.error("RESEND ERROR:", error);
            return Response.json(
                {
                    ok: false,
                    error: {
                        message: (error as any)?.message ?? "Resend send failed",
                        name: (error as any)?.name,
                        statusCode: (error as any)?.statusCode,
                    },
                },
                { status: 500 }
            );
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

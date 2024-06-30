import nodemailer from "nodemailer";
import { v4 } from "uuid";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
});

export default async function sendEmail(
    to: string,
    subject: string,
    text: string,
    html: string
): Promise<any> {
    try {
        const resp = await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
            to,
            subject,
            text,
            html,
            headers: {
                References: v4(),
            }
        });
        if (resp?.accepted?.length === 0) {
            throw new Error("Email not sent");
        }
        return resp;
    } catch (error) {
        console.error(error);
        return null;
    }
}
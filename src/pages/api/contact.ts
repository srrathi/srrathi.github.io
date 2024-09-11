import { NextRequest, NextResponse } from 'next/server';
import { object, string } from 'yup';
import rateLimit from '../../utils/rateLimiter';
import sendEmail from '@/lib/email';
import { emailSubject, generateEmailHTML } from '@/utils/emailUtils';
import axios from 'axios';

// Initialize rate limiter
const limiter = rateLimit(10, 15 * 60 * 1000); // 100 requests per 15 minutes

// Define a schema for input validation using Yup
const contactSchema = object({
    name: string().required('Name is required').min(3, 'Name is too short').max(50, 'Name is too long'),
    email: string().email('Invalid email').required('Email is required'),
    message: string().required('Message is required').max(200, 'Message is too long')
});

// Create a handler function for the API route
const handler = async (req: any, res: any) => {
    // Apply security headers
    // res.headers.set('Content-Security-Policy', "default-src 'self'");
    // res.headers.set('X-Content-Type-Options', 'nosniff');
    // res.headers.set('X-Frame-Options', 'DENY');
    // res.headers.set('X-XSS-Protection', '1; mode=block');

    if (req.method === 'POST') {
        if (!limiter(req)) {
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        }

        try {
            const body = req.body;
            const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

            await contactSchema.validate(body, { abortEarly: false });

            const { name, email, message, gReCaptchaToken } = body;

            const formData = `secret=${secretKey}&response=${gReCaptchaToken}`;

            let gResp;
            try {
                gResp = await axios.post(
                    "https://www.google.com/recaptcha/api/siteverify",
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );
            } catch (e) {
                console.log("recaptcha error:", e);
            }
            if (gResp && gResp?.data?.success && gResp?.data?.score > 0.5) {
                const sendEmailTo = [process.env.PERSONAL_EMAIL, email].join(',');
                const resp = await sendEmail(sendEmailTo, emailSubject, message, generateEmailHTML(name, email, message));
                if (resp) {
                    return res.status(200).json({ message: 'Contact form submitted successfully' });
                }

                return res.status(500).json({ message: 'Failed to submit contact form' });
            } else {
                console.log("fail: gResp?.data?.score:", gResp?.data?.score);
                return res.status(400).json({ message: 'recatcha verification score failed', score: gResp?.data?.score });
            }

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        // Handle non-POST requests
        return NextResponse.json({ message: `Method ${req.method} Not Allowed` }, { status: 405 });
    }
};


export default handler;

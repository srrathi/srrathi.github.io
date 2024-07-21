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
        // Apply rate limiting
        if (!limiter(req)) {
            // return NextResponse.json({ message: 'Too many requests, please try again later.' }, { status: 429 });
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        }

        try {
            // Parse the request body
            // const body = await req.json();
            const body = req.body;
            const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

            // Validate the request body
            await contactSchema.validate(body, { abortEarly: false });

            // Destructure the request body
            const { name, email, message, gReCaptchaToken } = body;

            // Process the contact form submission (e.g., send an email)
            // Placeholder logic for processing the data
            const formData = `secret=${secretKey}&response=${gReCaptchaToken}`;
            // const resp = await insertContact({ name, email, message, timestamp });
            // if (resp) {
            //     // Send a success response
            //     console.log(resp);
            //     return NextResponse.json({ message: 'Contact form submitted successfully' });
            // }
            try {
                res = await axios.post(
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
            if (res && res.data?.success && res.data?.score > 0.5) {
                const sendEmailTo = [process.env.PERSONAL_EMAIL, email].join(',');
                const resp = await sendEmail(sendEmailTo, emailSubject, message, generateEmailHTML(name, email, message));
                if (resp) {
                    // Send a success response
                    // return NextResponse.json({ message: 'Contact form submitted successfully' });
                    return res.status(200).json({ message: 'Contact form submitted successfully' });
                }

                // return NextResponse.json({ message: 'Failed to submit contact form' }, { status: 500 });
                return res.status(500).json({ message: 'Failed to submit contact form' });
            } else {
                console.log("fail: res.data?.score:", res.data?.score);
                return res.status(400).json({ message: 'recatcha verification score failed', score: res.data?.score });
            }

        } catch (error) {
            // Handle validation errors
            if (error instanceof Error) {
                // return NextResponse.json({ message: error.message }, { status: 400 });
                return res.status(400).json({ message: error.message });
            }
            // return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        // Handle non-POST requests
        return NextResponse.json({ message: `Method ${req.method} Not Allowed` }, { status: 405 });
    }
};

// // Export the API route with Edge runtime
// export const config = {
//     runtime: 'edge',
// };

// Export the API route
export default handler;

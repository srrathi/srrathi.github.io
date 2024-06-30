export const emailSubject = 'Thanks for Getting in Touch - Sitaram Will Respond ASAP';

export const generateEmailHTML = (name: string, email: string, message: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thanks for Getting in Touch - Sitaram Will Respond ASAP</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            }
            .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
            background-color: #000000;
            color: #ffffff;
            padding: 10px 0;
            text-align: center;
            }
            .content {
            padding: 20px;
            text-align: left;
            line-height: 1.6;
            }
            .content h2 {
            color: #333333;
            }
            .content p {
            color: #555555;
            }
            .footer {
            text-align: center;
            padding: 10px 0;
            font-size: 12px;
            color: #aaaaaa;
            border-top: 2px solid #898989;
            }
            .social-icons {
            list-style-type: none;
            padding: 0;
            }
            .social-icons li {
            display: inline;
            margin: 0 10px;
            }
            .social-icons a {
            color: #898989
            }
            .social-icons a:hover{
            color: #393939
            }
            @media only screen and (max-width: 600px) {
            .container {
            padding: 10px;
            }
            .content {
            padding: 10px;
            }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You for Contacting</h1>
            </div>
            <div class="content">
                <h2>Hi ${name},</h2>
                <p>I'm Sitaram Rathi. Thank you for reaching out to me. I have received your message and will respond to you as soon as possible.</p>
                <p>If you have any additional information that might be helpful, please feel free to reply to this email.</p>
                <p>Below is the information you provided:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
                <p>Best regards,<br>Sitaram Rathi</p>
            </div>
            <div class="footer">
                <ul class="social-icons">
                <li><a target="_blank" href="https://www.linkedin.com/in/sitaram-rathi-519152197/">LinkedIn</a></li>
                <li><a target="_blank" href="https://github.com/srrathi">Github</a></li>
                <li><a target="_blank" href="https://twitter.com/SitaramRathi5">Twitter</a></li>
                <li><a target="_blank" href="https://www.instagram.com/imrathiii">Instagram</a></li>
                </ul>
            </div>
        </div>
    </body>
    </html>
    `
}
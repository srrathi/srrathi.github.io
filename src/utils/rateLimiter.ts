import { NextRequest } from "next/server";

const rateLimit = (limit: number, windowMs: number) => {
    const requests: { [key: string]: number[] } = {};

    return (req: any) => {
        const ip = req.headers['x-forwarded-for'] || req.headers['remoteAddress'] || '127.0.0.1';
        const now = Date.now();

        if (!requests[ip]) {
            requests[ip] = [];
        }

        // Remove requests that are outside the window
        requests[ip] = requests[ip].filter(timestamp => now - timestamp < windowMs);

        // Check if the number of requests is within the limit
        if (requests[ip].length >= limit) {
            return false;
        }

        // Add the current timestamp to the list of requests
        requests[ip].push(now);

        return true;
    };
};

export default rateLimit;

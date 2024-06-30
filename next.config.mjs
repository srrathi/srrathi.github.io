/** @type {import('next').NextConfig} */
import withDotenv from 'next-runtime-dotenv';

withDotenv({
    publicRuntimeConfig: {
        // Define your public runtime variables here
        NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
    },
});

export default {
    publicRuntimeConfig: {
        // Define your public runtime variables here
        NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
    },
    env: {
        // Define your public runtime variables here
        NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
    },
};

'use server'
import mongoose from "mongoose";

const DATABASE_URL = process.env.NEXT_PUBLIC_MONGODB_URI ?? 'mongodb://localhost:27017';
const DB_NAME = 'Portfolio';

if (!DATABASE_URL) {
    throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        mongoose.set('strictQuery', true);
        cached.promise = await mongoose.connect(DATABASE_URL, opts);
    }
    cached.conn = await cached.promise;
    return cached.conn;

}

export default connectDB;
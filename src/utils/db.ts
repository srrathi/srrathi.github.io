
"use server";
import clientPromise from '@/lib/mdb';
import connectDB from '@/lib/mongodb';
import ContactForm from '@/models/ContactForm';

interface insertContactData {
    name: string;
    email: string;
    message: string;
    timestamp: number;
}
export const insertContact = async (data: insertContactData) => {
    try {
        // await connectDB();
        // const client = await clientPromise;
        // const cursor = await client.db("Portfolio").collection("contact_form_submission").insertOne(data);
        // const result = cursor;
        // const submission = new ContactForm(data);
        // const result = await submission.save();
        // return result;
    } catch (err) {
        console.error('Error inserting contact', err);
        return null;
    }
};

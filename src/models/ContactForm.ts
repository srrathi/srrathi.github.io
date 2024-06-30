import mongoose from "mongoose";

const ContactFormSubmission = new mongoose.Schema(
    {
        name: String,
        email: String,
        message: String,
        timestamp: Number,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("ContactFormSubmission", ContactFormSubmission);

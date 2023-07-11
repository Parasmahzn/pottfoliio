import { connectToDB } from "@utils/database";
import Message from "@models/message";

export const POST = async (request) => {
    const { name, email, message } = await request.json();
    try {
        await connectToDB();

        // Check if the email already exists in the database
        const existingEmail = await Message.findOne({ email });
        if (existingEmail)
            return new Response('Email already exists', { status: 400 });

        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();

        return new Response("Message sent successfully", { status: 200 })
    } catch (error) {
        return new Response("Unable to send the message", { status: 500 })
    }
}
import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    message: {
        type: String,
    }
});

const Messages = models.Messages || model("Messages", MessageSchema);

export default Messages;
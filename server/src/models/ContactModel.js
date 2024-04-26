import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const contactModel = mongoose.model('Contact', contactSchema);

export default contactModel;
const { Schema, model } = require("mongoose");

const inquirySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    message: {
        type: String,
        trim: true,
    }
}, { timestamps: true });

const Inquiry = model("Inquiry", inquirySchema);

module.exports = Inquiry;
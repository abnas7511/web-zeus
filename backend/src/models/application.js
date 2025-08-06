const { Schema, model } = require("mongoose");

const applicationSchema = new Schema({
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
    position: {
        type: String,
        required: true,
    },
    resumeUrl: {
        type: String,
        required: true,
    },
    coverLetter: {
        type: String,
        trim: true,
    },
    cloudinaryId: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const Application = model("Application", applicationSchema);

module.exports = Application;
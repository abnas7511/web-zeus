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
        trim: true,
        required: true,
    },
    resumeUrl: {
        type: String,
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
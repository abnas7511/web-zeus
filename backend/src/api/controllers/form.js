const { inquiryValidation, applicationValidation } = require("../middlewares/validation");
const Inquiry = require("../../models/inquiry");
const Application = require("../../models/application");
const sendEmail = require("../../services/email");
const { v2: cloudinary } = require('cloudinary');

const submitInquiry = async(req, res, next) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Request body is empty or undefined' });
        }

        const { error } = inquiryValidation(req.body);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }
        
        const { name, email, subject, message } = req.body;

        const newInquiry = await Inquiry.create({
            name,
            email,
            subject,
            message,
        });

        const emailHtml = `
        <h1>New General Inquiry</h1>
        <p><strong>Name:</strong> ${newInquiry.name}</p>
        <p><strong>Email:</strong> ${newInquiry.email}</p>
        <hr>
        <p>${newInquiry.message}</p>
        `;

        await sendEmail({
        to: process.env.INQUIRY_RECIPIENT_EMAIL,
        subject: newInquiry.subject,
        html: emailHtml,
        });

        res.status(201).json({ message: "Inquiry Submitted Successfully", data: newInquiry });
    } catch(error) {
        next(error);
    }
}

const submitApplication = async(req, res, next) => {
    try {
        console.log('Application request body:', req.body);
        console.log('Application request file:', req.file);
        
        if (!req.file) {
            return res.status(400).json({ message: 'Resume file is required' });
        }
        
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Request body is empty or undefined' });
        }

        const { error } = applicationValidation(req.body);
        if (error) {
            await cloudinary.uploader.destroy(req.file.filename);
            return res.status(400).json({message: error.details[0].message});
        }
        
        const { name, email, position, coverLetter } = req.body;

        const newApplication = await Application.create({
            name,
            email,
            position,
            resumeUrl: req.file.path,
            coverLetter,
            cloudinaryId: req.file.filename,
        });

        const emailHtml = `
        <h1>New Career Application</h1>
        <p><strong>Name:</strong> ${newApplication.name}</p>
        <p><strong>Email:</strong> ${newApplication.email}</p>
        <p><strong>Position of Interest:</strong> ${newApplication.position}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${newApplication.coverLetter}</p>
        <hr>
        <p><strong>Resume Link:</strong> <a href="${newApplication.resumeUrl}" target="_blank">View Resume</a></p>
        `;

        await sendEmail({
        to: process.env.CAREERS_RECIPIENT_EMAIL,
        subject: `New Application for ${newApplication.position} from ${newApplication.name}`,
        html: emailHtml,
        });

        res.status(201).json({ message: "Career Application Submitted Successfully", data: newApplication });
    } catch(error) {
        next(error);
    }
}

module.exports = { 
    submitInquiry,
    submitApplication,
};
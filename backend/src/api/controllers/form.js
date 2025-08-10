const { inquiryValidation, applicationValidation } = require("../middlewares/validation");
const Inquiry = require("../../models/inquiry");
const Application = require("../../models/application");

const submitInquiry = async(req, res, next) => {
    try {
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

        res.status(201).json({ message: "Inquiry Submitted Successfully", data: newInquiry });
    } catch(error) {
        next(error);
    }
}

const submitApplication = async(req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Resume file is required' });
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

        res.status(201).json({ message: "Career Application Submitted Successfully", data: newApplication });
    } catch(error) {
        next(error);
    }
}

module.exports = { 
    submitInquiry,
    submitApplication,
};
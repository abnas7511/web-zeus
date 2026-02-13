const Joi = require('joi');

const inquiryValidation = (data) => {
    const schema = Joi.object({
    name: Joi.string().min(3).pattern(/^[A-Za-z\s]+$/).required().messages({
        'string.pattern.base': 'Name can only contain letters and spaces.'
    }),
    email: Joi.string().email().required(),
    subject: Joi.string().min(5).required(),
    message: Joi.string().min(10).required(),
  });
  return schema.validate(data);
};

const applicationValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).pattern(/^[A-Za-z\s]+$/).required().messages({
        'string.pattern.base': 'Name can only contain letters and spaces.'
    }),
    email: Joi.string().email().required(),
    position: Joi.string().required(),
    coverLetter: Joi.string().min(20).required(),
  });
  return schema.validate(data);
};

// Update the export
module.exports = { inquiryValidation, applicationValidation };
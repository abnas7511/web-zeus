
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Check for Mongoose CastError (bad ObjectId)
  if (err.name === 'CastError') {
    statusCode = 404;
    message = 'Resource not found.';
  }

  // Check for MongoDB duplicate key error
  if (err.code === 11000) {
    statusCode = 409; // Conflict
    message = 'Duplicate field value entered. An account with this email may already exist.';
  }

  // Check for Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400; // Bad Request
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };
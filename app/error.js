// This code defines error-handling middleware for an Express.js application.

// Middleware to handle 404 (Not Found) errors
const notFoundHandler = (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error); // Express will move on to the next middleware in the stack.
};

// Global error-handling middleware it takes 4 parameters and its call based on the status
const globalErrorHandler = (error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  // Default to 500 Internal Server Error if no specific status is set
  res.status(500).json({
    message: "Server error occured",
  });
};

// Exporting the error handlers to be used in other parts of the application
module.exports = {
  notFoundHandler,
  globalErrorHandler,
};

//If a middleware does not call next(), it means it is sending the response directly and stopping further processing.
//If a middleware function calls next(), Express will move on to the next middleware in the stack.

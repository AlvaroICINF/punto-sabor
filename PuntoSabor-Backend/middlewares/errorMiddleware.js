const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  // Default error
  let error = {
    success: false,
    message: err.message || "Internal Server Error",
    status: err.status || 500,
  };

  // Firestore errors
  if (err.code && err.code.includes("firestore")) {
    error.message = "Database operation failed";
    error.status = 500;
  }

  // Firebase authentication errors
  if (err.code && err.code.includes("auth")) {
    error.message = "Authentication failed";
    error.status = 401;
  }

  // Permission errors
  if (err.code && err.code.includes("permission-denied")) {
    error.message = "Permission denied";
    error.status = 403;
  }

  // Not found errors
  if (err.message && err.message.includes("not found")) {
    error.status = 404;
  }

  // Validation errors
  if (err.name === "ValidationError") {
    error.status = 400;
    error.message = "Validation failed";
  }

  // Send error response
  res.status(error.status).json({
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = {
  errorHandler,
  notFound,
  asyncHandler,
};

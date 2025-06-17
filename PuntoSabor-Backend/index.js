const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit"); // Corregido: era "rateimit"
require("dotenv").config();
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const routes = require("./routes/apiRoutes");

const app = express();
app.use(helmet());

// Variables de entorno con valores por defecto
const API_VERSION = process.env.API_VERSION || 'v1';
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(
  cors({
    origin:
      NODE_ENV === "production"
        ? ["https://your-frontend-domain.com"]
        : ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({ // Corregido: era "rateimit"
  windowMs: 15 * 60 * 1000,
  max: NODE_ENV === "production" ? 100 : 1000,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
});
app.use(limiter);

// Body parser middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// API routes
app.use(`/api/${API_VERSION}`, routes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Punto Sabor API",
    version: API_VERSION,
    environment: NODE_ENV,
    endpoints: {
      health: `/api/${API_VERSION}/health`,
      restaurants: `/api/${API_VERSION}/restaurants`,
      searchByDish: `/api/${API_VERSION}/restaurants/search/dish?dish=DISH_NAME`,
      globalDishSearch: `/api/${API_VERSION}/dishes/search?dish=DISH_NAME`,
    },
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Punto Sabor API server running on port ${PORT}`);
  console.log(`📍 Environment: ${NODE_ENV}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api/${API_VERSION}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

module.exports = app; // Importante para Vercel
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

// Importa tus middlewares y rutas
const { errorHandler, notFound } = require("../middlewares/errorMiddleware");
const routes = require("../routes/apiRoutes");

const app = express();

// Variables de entorno con valores por defecto
const API_VERSION = process.env.API_VERSION || 'v1';
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(helmet());

// CORS middleware
app.use(
  cors({
    origin:
      NODE_ENV === "production"
        ? ["https://your-frontend-domain.com", "https://your-vercel-domain.vercel.app"]
        : ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
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

// Root route
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

// API routes
app.use(`/api/${API_VERSION}`, routes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Export for Vercel
module.exports = app;
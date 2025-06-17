const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateimit = require("express-rate-limit");
require("dotenv").config();
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const routes = require("./routes/apiRoutes");

const app = express();
app.use(helmet());

// CORS middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? ["https://your-frontend-domain.com"]
        : ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

// Rate limiting
const limiter = rateimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === "production" ? 100 : 1000,
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
app.use(`/api/${process.env.API_VERSION}`, routes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Punto Sabor API",
    version: process.env.API_VERSION,
    endpoints: {
      health: `/api/${process.env.API_VERSION}/health`,
      restaurants: `/api/${process.env.API_VERSION}/restaurants`,
      searchByDish: `/api/${process.env.API_VERSION}/restaurants/search/dish?dish=DISH_NAME`,
      globalDishSearch: `/api/${process.env.API_VERSION}/dishes/search?dish=DISH_NAME`,
    },
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Punto Sabor API server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `🔗 API Base URL: http://localhost:${PORT}/api/${process.env.API_VERSION}`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

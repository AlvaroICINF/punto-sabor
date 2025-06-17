const express = require("express");
const restaurantRoutes = require("./restaurantRoutes");
const { dishRouter, nestedDishRouter } = require("./dishRoutes");
const userRoutes = require("./userRoutes");

const router = express.Router();

// API health check
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Punto Sabor API is running",
    timestamp: new Date().toISOString(),
    version: process.env.API_VERSION,
  });
});

// Mount routes
router.use("/restaurants", restaurantRoutes);
router.use("/dishes", dishRouter);
router.use("/users", userRoutes);
router.use("/restaurants/:restaurantId/dishes", nestedDishRouter);

module.exports = router;

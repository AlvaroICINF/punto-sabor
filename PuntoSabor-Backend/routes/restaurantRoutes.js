const express = require("express");
const {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  searchRestaurants,
  searchRestaurantsByDish,
} = require("../controllers/restaurantController");
const {
  validateRestaurant,
  validateSearchQuery,
  validatePagination,
  validateId,
} = require("../middlewares/validationMiddleware");
const { authenticate, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(validatePagination, getAllRestaurants)
  .post(validateRestaurant, authenticate, isAdmin, createRestaurant);

router.route("/search").get(validateSearchQuery, searchRestaurants);

router.route("/search/dish").get(validateSearchQuery, searchRestaurantsByDish);

router
  .route("/:id")
  .get(validateId("id"), getRestaurant)
  .put(
    validateId("id"),
    authenticate,
    isAdmin,
    validateRestaurant,
    updateRestaurant
  )
  .delete(validateId("id"), authenticate, isAdmin, deleteRestaurant);

module.exports = router;

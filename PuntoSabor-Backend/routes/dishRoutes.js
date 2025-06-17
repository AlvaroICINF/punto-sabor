const express = require("express");
const {
  getAllDishesByRestaurant,
  getDish,
  createDish,
  updateDish,
  deleteDish,
  searchDishes,
  searchDishesByCategory,
  globalSearchDishes,
  getAllDishes,
} = require("../controllers/dishController");
const {
  validateDish,
  validateSearchQuery,
  validatePagination,
  validateId,
} = require("../middlewares/validationMiddleware");
const { authenticate, isAdmin } = require("../middlewares/authMiddleware");

const dishRouter = express.Router();
dishRouter.route("/").get(getAllDishes);
dishRouter.route("/search").get(validateSearchQuery, globalSearchDishes);

const nestedDishRouter = express.Router({ mergeParams: true });
nestedDishRouter
  .route("/")
  .get(validatePagination, getAllDishesByRestaurant)
  .post(validateDish, authenticate, isAdmin, createDish);

nestedDishRouter.route("/search").get(validateSearchQuery, searchDishes);

nestedDishRouter
  .route("/category/:category")
  .get(validateId("category"), searchDishesByCategory);

nestedDishRouter
  .route("/:dishId")
  .get(validateId("dishId"), getDish)
  .put(validateId("dishId"), authenticate, isAdmin, validateDish, updateDish)
  .delete(validateId("dishId"), authenticate, isAdmin, deleteDish);

module.exports = {
  dishRouter,
  nestedDishRouter,
};

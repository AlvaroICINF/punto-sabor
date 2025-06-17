const Dish = require("../database/models/Dish");
const { asyncHandler } = require("../middlewares/errorMiddleware");

const dishModel = new Dish();

// @desc    Get all dishes from a restaurant
// @route   GET /api/v1/restaurants/:restaurantId/dishes
// @access  Public
const getAllDishesByRestaurant = asyncHandler(async (req, res) => {
  const { restaurantId } = req.params;
  const { limit } = req.query;

  const dishes = await dishModel.getAllByRestaurant(restaurantId, limit);

  res.status(200).json({
    success: true,
    count: dishes.length,
    data: dishes,
  });
});

// @desc    Get single dish
// @route   GET /api/v1/restaurants/:restaurantId/dishes/:dishId
// @access  Public
const getDish = asyncHandler(async (req, res) => {
  const { restaurantId, dishId } = req.params;

  const dish = await dishModel.getById(restaurantId, dishId);

  if (!dish) {
    return res.status(404).json({
      success: false,
      message: "Dish not found",
    });
  }

  res.status(200).json({
    success: true,
    data: dish,
  });
});

// @desc    Create new dish
// @route   POST /api/v1/restaurants/:restaurantId/dishes
// @access  Private
const createDish = asyncHandler(async (req, res) => {
  const { restaurantId } = req.params;

  const dish = await dishModel.create(restaurantId, req.body);

  res.status(201).json({
    success: true,
    data: dish,
  });
});

// @desc    Update dish
// @route   PUT /api/v1/restaurants/:restaurantId/dishes/:dishId
// @access  Private
const updateDish = asyncHandler(async (req, res) => {
  const { restaurantId, dishId } = req.params;

  const dish = await dishModel.getById(restaurantId, dishId);

  if (!dish) {
    return res.status(404).json({
      success: false,
      message: "Dish not found",
    });
  }

  const updatedDish = await dishModel.update(restaurantId, dishId, req.body);

  res.status(200).json({
    success: true,
    data: updatedDish,
  });
});

// @desc    Delete dish
// @route   DELETE /api/v1/restaurants/:restaurantId/dishes/:dishId
// @access  Private
const deleteDish = asyncHandler(async (req, res) => {
  const { restaurantId, dishId } = req.params;

  const dish = await dishModel.getById(restaurantId, dishId);

  if (!dish) {
    return res.status(404).json({
      success: false,
      message: "Dish not found",
    });
  }

  await dishModel.delete(restaurantId, dishId);

  res.status(200).json({
    success: true,
    message: "Dish deleted successfully",
  });
});

// @desc    Search dishes in a restaurant
// @route   GET /api/v1/restaurants/:restaurantId/dishes/search
// @access  Public
const searchDishes = asyncHandler(async (req, res) => {
  const { restaurantId } = req.params;
  const { q } = req.query;

  const dishes = await dishModel.searchInRestaurant(restaurantId, q);

  res.status(200).json({
    success: true,
    count: dishes.length,
    data: dishes,
  });
});

// @desc    Search dishes by category in a restaurant
// @route   GET /api/v1/restaurants/:restaurantId/dishes/category/:category
// @access  Public
const searchDishesByCategory = asyncHandler(async (req, res) => {
  const { restaurantId, category } = req.params;

  const dishes = await dishModel.searchByCategory(restaurantId, category);

  res.status(200).json({
    success: true,
    count: dishes.length,
    data: dishes,
  });
});

// @desc    Global search for dishes across all restaurants
// @route   GET /api/v1/dishes/search
// @access  Public
const globalSearchDishes = asyncHandler(async (req, res) => {
  const { dish } = req.query;

  const results = await dishModel.globalSearch(dish);

  res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  });
});

// @desc    Get all dishes
// @route   GET /api/v1/dishes
// @access  Public
const getAllDishes = asyncHandler(async (req, res) => {
  const dishes = await dishModel.getAllDishes();

  res.status(200).json({
    success: true,
    count: dishes.length,
    data: dishes,
  });
});

module.exports = {
  getAllDishesByRestaurant,
  getDish,
  createDish,
  updateDish,
  deleteDish,
  searchDishes,
  searchDishesByCategory,
  globalSearchDishes,
  getAllDishes,
};

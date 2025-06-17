const Restaurant = require("../database/models/Restaurant");
const { asyncHandler } = require("../middlewares/errorMiddleware");

const restaurantModel = new Restaurant();

// @desc    Get all restaurants
// @route   GET /api/v1/restaurants
// @access  Public
const getAllRestaurants = asyncHandler(async (req, res) => {
  const { limit, offset, specialty, priceRange, search } = req.query;

  let restaurants;

  try {
    if (search) {
      // Búsqueda por término
      restaurants = await restaurantModel.search(search);
    } else if (specialty || priceRange) {
      // Filtros específicos
      restaurants = await restaurantModel.getWithFilters({
        specialty,
        priceRange,
        limit,
        offset,
      });
    } else {
      // Obtener todos los restaurantes
      restaurants = await restaurantModel.getAll(limit, offset);
    }

    res.status(200).json({
      success: true,
      count: restaurants.length,
      data: restaurants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Error al obtener los restaurantes",
    });
  }
});

// @desc    Get single restaurant
// @route   GET /api/v1/restaurants/:id
// @access  Public
const getRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.getById(req.params.id);

  if (!restaurant) {
    return res.status(404).json({
      success: false,
      message: "Restaurant not found",
    });
  }

  res.status(200).json({
    success: true,
    data: restaurant,
  });
});

// @desc    Create new restaurant
// @route   POST /api/v1/restaurants
// @access  Private
const createRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.create(req.body);

  res.status(201).json({
    success: true,
    data: restaurant,
  });
});

// @desc    Update restaurant
// @route   PUT /api/v1/restaurants/:id
// @access  Private
const updateRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.getById(req.params.id);

  if (!restaurant) {
    return res.status(404).json({
      success: false,
      message: "Restaurant not found",
    });
  }

  const updatedRestaurant = await restaurantModel.update(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    data: updatedRestaurant,
  });
});

// @desc    Delete restaurant
// @route   DELETE /api/v1/restaurants/:id
// @access  Private
const deleteRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await restaurantModel.getById(req.params.id);

  if (!restaurant) {
    return res.status(404).json({
      success: false,
      message: "Restaurant not found",
    });
  }

  await restaurantModel.delete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Restaurant deleted successfully",
  });
});

// @desc    Search restaurants by name
// @route   GET /api/v1/restaurants/search
// @access  Public
const searchRestaurants = asyncHandler(async (req, res) => {
  const { q } = req.query;

  const restaurants = await restaurantModel.searchByName(q);

  res.status(200).json({
    success: true,
    count: restaurants.length,
    data: restaurants,
  });
});

// @desc    Search restaurants by dish
// @route   GET /api/v1/restaurants/search/dish
// @access  Public
const searchRestaurantsByDish = asyncHandler(async (req, res) => {
  const { dish } = req.query;

  const restaurants = await restaurantModel.searchByDish(dish);

  res.status(200).json({
    success: true,
    count: restaurants.length,
    data: restaurants,
  });
});

module.exports = {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  searchRestaurants,
  searchRestaurantsByDish,
};

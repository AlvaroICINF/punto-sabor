const validateRestaurant = (req, res, next) => {
  const { data } = req.body;
  const errors = [];

  // Validate required fields
  if (
    !data?.name ||
    typeof data.name !== "string" ||
    data.name.trim().length === 0
  ) {
    errors.push("Name is required and must be a non-empty string");
  }

  if (
    !data?.address ||
    typeof data.address !== "string" ||
    data.address.trim().length === 0
  ) {
    errors.push("Address is required and must be a non-empty string");
  }

  // Validate optional fields
  if (data?.phone && typeof data.phone !== "string") {
    errors.push("Phone must be a string or null");
  }

  if (data?.specialty && typeof data.specialty !== "string") {
    errors.push("Specialty must be a string");
  }

  if (data?.upTime && typeof data.upTime !== "string") {
    errors.push("UpTime must be a string");
  }

  if (data?.website && typeof data.website !== "string") {
    errors.push("Website must be a string or null");
  }

  if (data?.priceRange) {
    if (
      typeof data.priceRange !== "string" ||
      !/^\d+-\d+$/.test(data.priceRange)
    ) {
      errors.push(
        "Price range must be in format 'min-max' (e.g., '4000-13000')"
      );
    }
  }

  // Validate services array
  if (data?.services) {
    if (!Array.isArray(data.services)) {
      errors.push("Services must be an array");
    } else {
      const validServiceKeys = ["delivery", "takeOut", "booking", "parking"];
      data.services.forEach((service, index) => {
        const serviceKeys = Object.keys(service);

        if (
          serviceKeys.length !== 1 ||
          !validServiceKeys.includes(serviceKeys[0])
        ) {
          errors.push(
            `Service at index ${index} must contain exactly one valid key (${validServiceKeys.join(
              ", "
            )})`
          );
        } else if (typeof service[serviceKeys[0]] !== "boolean") {
          errors.push(
            `Service ${serviceKeys[0]} at index ${index} must be a boolean`
          );
        }
      });
    }
  }

  // Validate rating if provided
  if (data?.rating !== undefined) {
    if (typeof data.rating !== "number" || data.rating < 1 || data.rating > 5) {
      errors.push("Rating must be a number between 1 and 5");
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors,
    });
  }

  next();
};

const validateDish = (req, res, next) => {
  const { name, description, price, category } = req.body;
  const errors = [];

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.push("Name is required and must be a non-empty string");
  }

  if (description && typeof description !== "string") {
    errors.push("Description must be a string");
  }

  if (!price || typeof price !== "number" || price < 0) {
    errors.push("Price is required and must be a positive number");
  }

  if (
    !category ||
    typeof category !== "string" ||
    category.trim().length === 0
  ) {
    errors.push("Category is required and must be a non-empty string");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors,
    });
  }

  next();
};

const validateSearchQuery = (req, res, next) => {
  const { q, dish } = req.query;
  const searchQuery = q || dish;

  if (
    !searchQuery ||
    typeof searchQuery !== "string" ||
    searchQuery.trim().length === 0
  ) {
    return res.status(400).json({
      success: false,
      message: "Search query is required and must be a non-empty string",
      errors: ['Query parameter "q" or "dish" is required'],
    });
  }

  if (searchQuery.length > 100) {
    return res.status(400).json({
      success: false,
      message: "Search query is too long",
      errors: ["Query must be less than 100 characters"],
    });
  }

  next();
};

const validatePagination = (req, res, next) => {
  const { limit, offset } = req.query;

  if (limit) {
    const limitNum = parseInt(limit);
    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      return res.status(400).json({
        success: false,
        message: "Invalid limit parameter",
        errors: ["Limit must be a number between 1 and 100"],
      });
    }
    req.query.limit = limitNum;
  } else {
    req.query.limit = 20; // Default limit
  }

  if (offset) {
    const offsetNum = parseInt(offset);
    if (isNaN(offsetNum) || offsetNum < 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid offset parameter",
        errors: ["Offset must be a non-negative number"],
      });
    }
    req.query.offset = offsetNum;
  } else {
    req.query.offset = 0; // Default offset
  }

  next();
};

const validateId = (paramName) => {
  return (req, res, next) => {
    const id = req.params[paramName];

    if (!id || typeof id !== "string" || id.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: `Invalid ${paramName}`,
        errors: [`${paramName} is required and must be a non-empty string`],
      });
    }

    next();
  };
};

module.exports = {
  validateRestaurant,
  validateDish,
  validateSearchQuery,
  validatePagination,
  validateId,
};

import React, { useState, useMemo, useEffect } from "react";
import { getDishes } from "../../constants/api";
import {
  Filter,
  Utensils,
  Search,
  ChefHat,
  Coffee,
  Pizza,
  Fish,
  Sandwich,
  Cake,
  Package,
} from "lucide-react";
import "./Categories.css";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const response = await getDishes();
        setDishes(response.data);

        console.log("dishes obtenidos:", response.data);
      } catch (err) {
        console.error("Error al obtener dishes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Obtener todas las categorías únicas con información adicional
  const categoriesData = useMemo(() => {
    const categoriesMap = new Map();

    dishes.forEach((dish) => {
      const category = dish.category;

      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, {
          name: category,
          dishes: [],
          restaurants: new Set(),
          minPrice: Infinity,
          maxPrice: 0,
        });
      }

      const categoryData = categoriesMap.get(category);
      categoryData.dishes.push({
        ...dish,
        restaurantName: dish.restaurant.name,
        restaurantSpecialty: dish.restaurant.specialty || "N/A", // Added fallback
      });
      categoryData.restaurants.add(dish.restaurant.name);
      categoryData.minPrice = Math.min(categoryData.minPrice, dish.price);
      categoryData.maxPrice = Math.max(categoryData.maxPrice, dish.price);
    });

    return Array.from(categoriesMap.values()).map((category) => ({
      ...category,
      restaurantCount: category.restaurants.size,
      dishCount: category.dishes.length,
      avgPrice:
        category.dishes.length > 0
          ? Math.round(
              category.dishes.reduce((sum, dish) => sum + dish.price, 0) /
                category.dishes.length
            )
          : 0,
    }));
  }, [dishes]); // Add dishes as dependency

  // Filtrar y ordenar categorías
  const filteredAndSortedCategories = useMemo(() => {
    let filtered = categoriesData;

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = categoriesData.filter(
        (category) =>
          category.name.toLowerCase().includes(searchLower) ||
          category.dishes.some(
            (dish) =>
              dish.name.toLowerCase().includes(searchLower) ||
              (dish.description &&
                dish.description.toLowerCase().includes(searchLower))
          )
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "dishCount":
          return b.dishCount - a.dishCount;
        case "price":
          return a.avgPrice - b.avgPrice;
        default:
          return 0;
      }
    });
  }, [categoriesData, searchTerm, sortBy]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      "Platos de Fondo": ChefHat,
      Entradas: Package,
      Hamburguesas: Utensils,
      Pizzas: Pizza,
      Sándwiches: Sandwich,
      Acompañamientos: Utensils,
      Postres: Cake,
      Bebidas: Coffee,
      Mariscos: Fish,
    };

    return iconMap[categoryName] || Utensils;
  };

  if (loading) {
    return (
      <div className="categories-page">
        <div className="page-header">
          <div className="header-content">
            <h1 className="page-title">
              <ChefHat className="page-icon" />
              Categorías
            </h1>
            <p className="page-subtitle">
              Explora todos los tipos de platos disponibles en nuestros
              restaurantes
            </p>
          </div>
        </div>

        <div className="search-and-filters">
          <div className="search-section">
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Buscar en categorías o platos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="filters-section">
            <div className="filter-group">
              <Filter className="filter-icon" />
              <span className="filter-label">Ordenar por:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Nombre</option>
                <option value="dishCount">Cantidad de platos</option>
                <option value="price">Precio promedio</option>
              </select>
            </div>
            <div className="results-count">
              {filteredAndSortedCategories.length} categoría
              {filteredAndSortedCategories.length !== 1 ? "s" : ""} encontrada
              {filteredAndSortedCategories.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <div className="restaurants-loader">
          <div className="loader-container">
            <div className="loader-animation">
              <div className="loader-circle"></div>
              <div className="loader-circle"></div>
              <div className="loader-circle"></div>
              <ChefHat className="loader-icon" />
            </div>

            <div className="loader-text">
              <h3 className="loader-title">Cargando categorias</h3>
              <p className="loader-subtitle">
                Encontrando los mejores lugares para ti...
              </p>

              <div className="loader-dots">
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="categories-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">
            <ChefHat className="page-icon" />
            Categorías
          </h1>
          <p className="page-subtitle">
            Explora todos los tipos de platos disponibles en nuestros
            restaurantes
          </p>
        </div>
      </div>

      <div className="search-and-filters">
        <div className="search-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar en categorías o platos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filters-section">
          <div className="filter-group">
            <Filter className="filter-icon" />
            <span className="filter-label">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="name">Nombre</option>
              <option value="dishCount">Cantidad de platos</option>
              <option value="price">Precio promedio</option>
            </select>
          </div>
          <div className="results-count">
            {filteredAndSortedCategories.length} categoría
            {filteredAndSortedCategories.length !== 1 ? "s" : ""} encontrada
            {filteredAndSortedCategories.length !== 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {filteredAndSortedCategories.length === 0 ? (
        <div className="no-results">
          <div className="no-results-icon">
            <Search className="no-results-svg" />
          </div>
          <h3>No se encontraron categorías</h3>
          <p>Intenta con otros términos de búsqueda</p>
        </div>
      ) : (
        <div className="categories-grid">
          {filteredAndSortedCategories.map((category, index) => {
            const IconComponent = getCategoryIcon(category.name);

            return (
              <div key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    <IconComponent className="category-icon" />
                  </div>
                  <div className="category-main-info">
                    <h2 className="category-name">{category.name}</h2>
                    <div className="category-stats">
                      <span className="stat-item">
                        {category.dishCount} plato
                        {category.dishCount !== 1 ? "s" : ""}
                      </span>
                      <span className="stat-separator">•</span>
                      <span className="stat-item">
                        {category.restaurantCount} restaurante
                        {category.restaurantCount !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="price-info">
                      Desde {formatPrice(category.minPrice)} hasta{" "}
                      {formatPrice(category.maxPrice)}
                    </div>
                  </div>
                  <div className="category-summary">
                    <div className="avg-price">
                      <span className="avg-price-label">Precio promedio</span>
                      <span className="avg-price-value">
                        {formatPrice(category.avgPrice)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="category-dishes">
                  <h3 className="dishes-section-title">Platos Disponibles</h3>
                  <div className="dishes-grid">
                    {category.dishes.slice(0, 6).map((dish, dishIndex) => (
                      <div key={dishIndex} className="dish-card">
                        <div className="dish-header">
                          <h4 className="dish-name">{dish.name}</h4>
                          <span className="dish-price">
                            {formatPrice(dish.price)}
                          </span>
                        </div>
                        <p className="dish-description">
                          {dish.description}
                        </p>
                        <div className="dish-footer">
                          <span className="restaurant-tag">
                            {dish.restaurantName}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {category.dishes.length > 6 && (
                    <div className="more-dishes-indicator">
                      +{category.dishes.length - 6} platos más en esta categoría
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
import React, { useState, useMemo, useEffect } from "react";
import { getRestaurants } from "../../constants/api";
import {
  Search,
  MapPin,
  Phone,
  Clock,
  Star,
  Utensils,
  Car,
  Package,
  Calendar,
  ExternalLink,
} from "lucide-react";
import "./Home.css";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [mockRestaurants, setMockRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurants = await getRestaurants();
        setMockRestaurants(restaurants.data);

        console.log("Restaurantes obtenidos:", restaurants.data);
      } catch (err) {
        console.error("Error al obtener restaurantes:", err);
      }
    };

    fetchRestaurants();
  }, []);

  // Función para generar URL de Google Maps
  const getGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const results = [];
    const searchLower = searchTerm.toLowerCase().trim();

    mockRestaurants.forEach((restaurant) => {
      const restaurantMatches =
        restaurant.data.specialty.toLowerCase().includes(searchLower) ||
        restaurant.data.name.toLowerCase().includes(searchLower);

      const matchingDishes = restaurant.dishes.filter(
        (dish) =>
          dish.data.name.toLowerCase().includes(searchLower) ||
          dish.data.description.toLowerCase().includes(searchLower) ||
          dish.data.category.toLowerCase().includes(searchLower)
      );

      if (restaurantMatches || matchingDishes.length > 0) {
        results.push({
          restaurant: restaurant.data,
          dishes:
            matchingDishes.length > 0
              ? matchingDishes
              : restaurant.dishes.slice(0, 3),
          matchType: restaurantMatches ? "restaurant" : "dish",
        });
      }
    });

    return results;
  }, [searchTerm, mockRestaurants]);

  const formatPrice = (price) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);

  const getServiceIcons = (services) => {
    const icons = [];
    services.forEach((service) => {
      if (service.delivery) icons.push({ icon: Package, label: "Delivery" });
      if (service.takeOut) icons.push({ icon: Utensils, label: "Para llevar" });
      if (service.booking) icons.push({ icon: Calendar, label: "Reservas" });
      if (service.parking) icons.push({ icon: Car, label: "Estacionamiento" });
    });
    return icons;
  };

  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Encuentra tu <span className="highlight-text">plato favorito</span>
          </h1>
          <p className="hero-subtitle">
            Descubre los mejores restaurantes y sus especialidades cerca de ti
          </p>
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Busca tu plato favorito... ej: papas fritas, cazuela, empanadas"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="suggestions">
            {[
              "papas fritas",
              "cazuela",
              "empanadas",
              "lomo",
              "pastel de choclo",
              "mariscos",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setSearchTerm(suggestion)}
                className="suggestion-btn"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
        <div className="decor-circle decor-yellow"></div>
        <div className="decor-circle decor-green"></div>
      </div>

      {searchTerm ? (
        <div className="results-container">
          <div className="results-header">
            <h2>Resultados para "{searchTerm}"</h2>
            <p>
              {searchResults.length}{" "}
              {searchResults.length === 1
                ? "resultado encontrado"
                : "resultados encontrados"}
            </p>
          </div>
          {searchResults.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <Search className="no-results-svg" />
              </div>
              <h3>No encontramos resultados</h3>
              <p>
                Intenta con otros términos como "cazuela", "empanadas", "papas
                fritas" o "mariscos"
              </p>
            </div>
          ) : (
            <div className="results-grid">
              {searchResults.map((result, idx) => (
                <div key={idx} className="card">
                  <div className="card-header">
                    <div className="card-header-main">
                      <div className="card-icon-bg">
                        <Utensils className="card-icon" />
                      </div>
                      <div>
                        <h3 className="restaurant-name">
                          {result.restaurant.name}
                        </h3>
                        <p className="restaurant-specialty">
                          {result.restaurant.specialty}
                        </p>
                        <div className="restaurant-info">
                          <div>
                            <MapPin className="info-icon" />
                            <a 
                              href={getGoogleMapsUrl(result.restaurant.address)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="address-link"
                            >
                              {result.restaurant.address}
                              <ExternalLink className="external-link-icon" />
                            </a>
                          </div>
                          <div>
                            <Clock className="info-icon" />
                            {result.restaurant.upTime}
                          </div>
                          <div>
                            <Phone className="info-icon" />
                            <a 
                              href={`tel:${result.restaurant.phone}`}
                              className="phone-link"
                            >
                              {result.restaurant.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-header-extra">
                      <div className="price-range">
                        ${result.restaurant.priceRange}
                      </div>
                      <div className="service-icons">
                        {getServiceIcons(result.restaurant.services).map(
                          (s, i) => (
                            <div key={i} className="service-icon-wrapper">
                              <s.icon className="service-icon-svg" />
                              <div className="tooltip">{s.label}</div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h4 className="dishes-title">
                      <Star className="star-svg" />
                      {result.matchType === "dish"
                        ? "Platos que coinciden"
                        : "Platos destacados"}
                    </h4>
                    <div className="dishes-grid">
                      {result.dishes.map((dish) => (
                        <div key={dish.id} className="dish-card">
                          <div className="dish-header">
                            <h5>{dish.data.name}</h5>
                            <span className="dish-price">
                              {formatPrice(dish.data.price)}
                            </span>
                          </div>
                          <p className="dish-desc">{dish.data.description}</p>
                          <span className="dish-category">
                            {dish.data.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="no-search">
          <div className="no-search-graphic">
            <Search className="no-search-svg" />
          </div>
          <h3>¿Qué tienes ganas de comer hoy?</h3>
          <p>
            Usa el buscador para encontrar tus platos favoritos en los mejores
            restaurantes de la zona
          </p>
        </div>
      )}
    </div>
  );
};

export default Homepage;
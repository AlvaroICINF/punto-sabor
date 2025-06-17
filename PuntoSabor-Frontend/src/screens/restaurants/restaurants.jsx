import React, { useState, useEffect } from "react";
import { getRestaurants } from "../../constants/api";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Utensils,
  Car,
  Package,
  Calendar,
  Globe,
  Filter,
  DollarSign,
  ChefHat,
  ExternalLink,
  Search, // Añadir este icono para el buscador
} from "lucide-react";
import "./restaurants.css";

const Restaurants = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todos");
  const [sortBy, setSortBy] = useState("name");
  const [mockRestaurants, setMockRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda
  const [showOnlyWithWebsite, setShowOnlyWithWebsite] = useState(true); // Nuevo estado para filtrar por sitio web, por defecto true

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const restaurants = await getRestaurants();

        setMockRestaurants(restaurants.data);

        console.log("Restaurantes obtenidos:", restaurants);
      } catch (err) {
        console.error("Error al obtener restaurantes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Obtener especialidades únicas
  const specialties = [
    "Todos",
    ...new Set(mockRestaurants.map((r) => r.data.specialty)),
  ];

  // Filtrar y ordenar restaurantes
  const filteredAndSortedRestaurants = mockRestaurants
    .filter(
      (restaurant) =>
        (selectedSpecialty === "Todos" ||
        restaurant.data.specialty === selectedSpecialty) &&
        // Filtrar por término de búsqueda
        restaurant.data.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        // Filtrar por restaurantes con sitio web si está activado
        (!showOnlyWithWebsite || restaurant.data.website)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.data.name.localeCompare(b.data.name);
        case "specialty":
          return a.data.specialty.localeCompare(b.data.specialty);
        case "price":
          const priceA = parseInt(a.data.priceRange.split(" - ")[0]);
          const priceB = parseInt(b.data.priceRange.split(" - ")[0]);
          return priceA - priceB;
        default:
          return 0;
      }
    });

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

  const getGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  if (loading) {
    return (
      <div className="restaurants-page">
        <div className="page-header">
          <div className="header-content">
            <h1 className="page-title">
              <Utensils className="page-icon" />
              Restaurantes
            </h1>
            <p className="page-subtitle">
              Descubre todos los restaurantes disponibles en Osorno
            </p>
          </div>
        </div>

        <div className="filters-section">
          <div className="filters-container">
            <div className="filter-group">
              <Filter className="filter-icon" />
              <span className="filter-label">Especialidad:</span>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="filter-select"
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <span className="filter-label">Ordenar por:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="name">Nombre</option>
                <option value="specialty">Especialidad</option>
                <option value="price">Precio</option>
              </select>
            </div>
          </div>
          <div className="results-count">
            {filteredAndSortedRestaurants.length} restaurante
            {filteredAndSortedRestaurants.length !== 1 ? "s" : ""} encontrado
            {filteredAndSortedRestaurants.length !== 1 ? "s" : ""}
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
              <h3 className="loader-title">Cargando restaurantes</h3>
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
    <div className="restaurants-page">
      <div className="page-header">
        <div className="header-content">
          <h1 className="page-title">
            <Utensils className="page-icon" />
            Restaurantes
          </h1>
          <p className="page-subtitle">
            Descubre todos los restaurantes disponibles en Osorno
          </p>
        </div>
      </div>

      <div className="filters-section">
        {/* Añadir el buscador */}
        <div className="search-container">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Buscar restaurante por nombre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filters-container">
          <div className="filter-group">
            <Filter className="filter-icon" />
            <span className="filter-label">Especialidad:</span>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="filter-select"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <span className="filter-label">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="name">Nombre</option>
              <option value="specialty">Especialidad</option>
              <option value="price">Precio</option>
            </select>
          </div>
          {/* Añadir checkbox para filtrar por sitio web */}
          <div className="filter-group website-filter">
            <input
              type="checkbox"
              id="website-filter"
              checked={showOnlyWithWebsite}
              onChange={(e) => setShowOnlyWithWebsite(e.target.checked)}
              className="website-checkbox"
            />
            <label htmlFor="website-filter" className="website-label">
              <Globe className="filter-icon" />
              Solo con sitio web
            </label>
          </div>
        </div>
        <div className="results-count">
          {filteredAndSortedRestaurants.length} restaurante
          {filteredAndSortedRestaurants.length !== 1 ? "s" : ""} encontrado
          {filteredAndSortedRestaurants.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="restaurants-grid">
        {filteredAndSortedRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-header">
              <div className="restaurant-main-info">
                <div className="restaurant-icon-wrapper">
                  <Utensils className="restaurant-icon" />
                </div>
                <div className="restaurant-details">
                  <h2 className="restaurant-name">{restaurant.data.name}</h2>
                  <p className="restaurant-specialty">
                    {restaurant.data.specialty}
                  </p>
                  <div className="restaurant-meta">
                    <div className="meta-item">
                      <MapPin className="meta-icon" />
                      <span>{restaurant.data.address}</span>
                    </div>
                    <div className="meta-item">
                      <Clock className="meta-icon" />
                      <span>{restaurant.data.upTime}</span>
                    </div>
                    <div className="meta-item">
                      <Phone className="meta-icon" />
                      <span>{restaurant.data.phone}</span>
                    </div>
                    {restaurant.data.website && (
                      <div className="meta-item">
                        <Globe className="meta-icon" />
                        <span>{restaurant.data.website}</span>
                      </div>
                    )}
                    
                    {/* Botones de acción */}
                    <div className="restaurant-actions">
                      <a 
                        href={getGoogleMapsUrl(restaurant.data.address)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-button maps-button"
                      >
                        <MapPin className="action-icon" />
                        Ver en Maps
                      </a>
                      
                      {restaurant.data.website && (
                        <a 
                          href={restaurant.data.website.startsWith('http') ? restaurant.data.website : `https://${restaurant.data.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="action-button website-button"
                        >
                          <ExternalLink className="action-icon" />
                          Visitar Web
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="restaurant-extras">
                <div className="price-badge">
                  <DollarSign className="price-icon" />
                  <span>{restaurant.data.priceRange}</span>
                </div>
                <div className="services-icons">
                  {getServiceIcons(restaurant.data.services).map(
                    (service, idx) => (
                      <div key={idx} className="service-icon-container">
                        <service.icon className="service-icon" />
                        <div className="service-tooltip">{service.label}</div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="restaurant-menu">
              <h3 className="menu-title">
                <Star className="menu-star" />
                Menú Destacado
              </h3>
              <div className="dishes-list">
                {restaurant.dishes.slice(0, 4).map((dish) => (
                  <div key={dish.id} className="dish-item">
                    <div className="dish-info">
                      <h4 className="dish-name">{dish.data.name}</h4>
                      <p className="dish-description">
                        {dish.data.description}
                      </p>
                      <span className="dish-category">
                        {dish.data.category}
                      </span>
                    </div>
                    <div className="dish-price">
                      {formatPrice(dish.data.price)}
                    </div>
                  </div>
                ))}
                {restaurant.dishes.length > 4 && (
                  <div className="more-dishes">
                    +{restaurant.dishes.length - 4} platos más
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;

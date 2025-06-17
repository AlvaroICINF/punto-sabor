import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout.jsx";

import Home from "../screens/home/home.jsx";
import Restaurants from "../screens/restaurants/restaurants.jsx";
import Categories from "../screens/categories/categories.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantes" element={<Restaurants />} />
          <Route path="/categorias" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
}

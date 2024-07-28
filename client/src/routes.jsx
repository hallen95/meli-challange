import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items" element={<SearchResultsPage />} />
      <Route path="/items/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;

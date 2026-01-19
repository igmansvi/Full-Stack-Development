import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import UserPage from "../components/UserPage";
import NotFound from '../components/NotFound';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;

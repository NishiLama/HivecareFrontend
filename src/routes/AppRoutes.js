import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import Register from "../pages/Register/Register";
import MyBookings from "../pages/MyBookings/MyBookings";
import AboutUs from "../pages/About/AboutUs";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/Privacy/PrivacyPolicy";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/bookings"
        element={
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        }
      />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default AppRoutes;
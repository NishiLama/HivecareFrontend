import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <Navbar />

      <AppRoutes />

      <Footer />
    </Router>
  );
}

export default App;
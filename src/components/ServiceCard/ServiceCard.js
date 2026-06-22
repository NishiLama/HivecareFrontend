import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
import { useLocation } from "react-router-dom";

function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card text-center">
      <div className="service-icon">
        {icon}
      </div>

      <h5>{title}</h5>

      <p>{description}</p>
      <Link
        to="/bookings"
        state={{ service: title }}
        className="btn btn-primary"
      >
        Book Now
      </Link>
    </div>
  );
}

export default ServiceCard;
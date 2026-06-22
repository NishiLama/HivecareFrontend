import React, { useEffect, useState } from "react";
import { FaWrench, FaBroom, FaBook, FaBaby, FaDog, FaBolt, FaHammer, FaDumbbell, FaSpa, FaPrayingHands } from "react-icons/fa";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { getServices } from "../../api/api"; // make sure api.js is inside src/api
import "./Services.css";
import { useLocation } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const search = searchParams.get("search") || "";

  useEffect(() => {
    getServices()
      .then(response => setServices(response.data))
      .catch(error => console.error("Error fetching services:", error));
  }, []);

  const staticServices = [
    {
      title: "Plumber",
      description: "Fix leaks and pipe issues",
      icon: <FaWrench size={40} />
    },
    {
      title: "Maid",
      description: "Home cleaning services",
      icon: <FaBroom size={40} />
    },
    {
      title: "Tutor",
      description: "Private home tutoring",
      icon: <FaBook size={40} />
    },
    {
      title: "Babysitter",
      description: "Child care services",
      icon: <FaBaby size={40} />
    },
    {
      title: "Pet Sitter",
      description: "Pet care and walking",
      icon: <FaDog size={40} />
    },
    {
      title: "Yoga Instructor",
      description: "Personalized yoga sessions",
      icon: <FaPrayingHands size={40} />
    },
    {
      title: "Electrician",
      description: "Electrical repairs and installations",
      icon: <FaBolt size={40} />
    },
    {
      title: "Carpenter",
      description: "Furniture repair and woodwork",
      icon: <FaHammer size={40} />
    },
    {
      title: "Gym Trainer",
      description: "Fitness coaching and training",
      icon: <FaDumbbell size={40} />
    },
    {
      title: "Beautician",
      description: "Beauty and grooming services",
      icon: <FaSpa size={40} />
    }
  ];

  const filteredServices = staticServices.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-bg py-5">
      <div className="container">

        <h2 className="text-center mb-4 text-primary fw-bold">
          Our Services
        </h2>

        <div className="row g-4 justify-content-center">

          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}

        </div>

        {/* Call to Action Banner */}
        <div className="cta-banner text-center py-5 mt-5">
          <h3 className="fw-bold">
            Need urgent help?
          </h3>

          <p>
            Book a service instantly with HiveCare
          </p>

          <button className="btn btn-light btn-lg fw-bold">
            Book Now
          </button>
        </div>

      </div>

      {/* Dynamic Services from Backend */}
      <div className="container mt-5">

        <h3 className="text-center mb-4">
          Available Services
        </h3>

        <ul className="list-group">
          {services.map((s) => (
            <li
              key={s.id}
              className="list-group-item"
            >
              <strong>{s.name}</strong> - {s.description}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default Services;

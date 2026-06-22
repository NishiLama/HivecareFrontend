import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h4>Hive Care</h4>
          <p>
            Trusted home services at your fingertips.
            Book professional cleaning, repairs,
            plumbing, electrical work and more.
          </p>
        </div>

        <div className="footer-section">
          <h5>Quick Links</h5>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/bookings">My Bookings</Link>
        </div>

        <div className="footer-section">
          <h5>Support</h5>

          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-section">
          <h5>Contact</h5>

          <p>📧 support@hivecare.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Bangalore, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Hive Care.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
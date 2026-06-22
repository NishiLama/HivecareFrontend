import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import homeHeroImg from "../../assets/images/home-hero.jpg";
import plumberImg from "../../assets/images/plumber.jpg";
import yogaImg from "../../assets/images/yoga.jpg";
import beauticianImg from "../../assets/images/beautician.jpg";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <img src={homeHeroImg} alt="Hive Care" className="hero-image" />

        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Trusted Home Services At Your Doorstep</h1>

              <p>
                Book verified professionals for plumbing, beauty,
                wellness, tutoring, cleaning and more.
              </p>

              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary btn-lg">
                  Explore Services
                </Link>

                <Link to="/bookings" className="btn btn-outline-light btn-lg">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section py-5">
        <div className="container">
          <h2 className="section-title">Why Choose Hive Care?</h2>

          <div className="row g-4 mt-3">
            <div className="col-md-3">
              <div className="feature-card">
                <h4>✓ Verified Experts</h4>
                <p>Trusted professionals for every service.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card">
                <h4>✓ Easy Booking</h4>
                <p>Book services within minutes.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card">
                <h4>✓ Affordable Pricing</h4>
                <p>Transparent pricing with no surprises.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card">
                <h4>✓ 24/7 Support</h4>
                <p>Dedicated customer support anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="section-title">Popular Services</h2>

          <div className="row g-4 mt-3">

            <div className="col-md-4">
              <div className="service-preview-card">
                <img src={plumberImg} alt="Plumber" />
                <div className="service-content">
                  <h4>Plumbing Solutions</h4>
                  <p>Quick repairs and installations.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-preview-card">
                <img src={yogaImg} alt="Yoga" />
                <div className="service-content">
                  <h4>Yoga & Wellness</h4>
                  <p>Professional instructors at home.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-preview-card">
                <img src={beauticianImg} alt="Beautician" />
                <div className="service-content">
                  <h4>Beauty & Grooming</h4>
                  <p>Salon experience at your doorstep.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-3">
              <div className="stat-box">
                <h2>10K+</h2>
                <p>Bookings</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-box">
                <h2>500+</h2>
                <p>Professionals</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-box">
                <h2>98%</h2>
                <p>Satisfaction</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-box">
                <h2>24/7</h2>
                <p>Support</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <h2>Ready to Book a Service?</h2>

          <p>
            Experience trusted professionals and hassle-free bookings.
          </p>

          <Link to="/services" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
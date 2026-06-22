import React, { useState, useEffect } from "react";
import {
  getBookings,
  getServices,
  createBooking,
  updateBooking,
  deleteBooking
} from "../../api/api";

import "./MyBookings.css";
import { useLocation } from "react-router-dom";

function MyBookings() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    service: location.state?.service || "",
  });

  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state?.service) {
      setFormData((prev) => ({
        ...prev,
        service: location.state.service,
      }));
    }
  }, [location.state]);

  useEffect(() => {
    getBookings()
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getServices()
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  const selectedService = services.find(
    (s) => s.name === formData.service
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.service ||
      !formData.name ||
      !formData.address ||
      !formData.date
    ) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      if (formData.id) {
        const response = await updateBooking(
          formData.id,
          formData
        );

        setBookings(
          bookings.map((b) =>
            b.id === formData.id
              ? response.data
              : b
          )
        );

        setMessage("Booking updated successfully");
      } else {
        const response = await createBooking(
          formData
        );

        setBookings([
          ...bookings,
          response.data
        ]);

        setMessage("Booking successful");
      }

      setFormData({
        id: null,
        name: "",
        address: "",
        date: "",
        service: formData.service
      });
    } catch {
      setMessage("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBooking(id);

      setBookings(
        bookings.filter(
          (booking) => booking.id !== id
        )
      );

      setMessage("Booking deleted successfully");
    } catch {
      setMessage("Failed to delete booking");
    }
  };

  return (
    <div className="page-bg">
      <div className="container py-5">

        <div className="text-center mb-5">
          <h1 className="page-title">
            Book a Service
          </h1>

          <p className="page-subtitle">
            Choose a service and schedule
            it in just a few clicks.
          </p>
        </div>

        <div className="row g-5">

          {/* Booking Form */}


          <div className="col-lg-5">

            <div className="booking-form-card">

              <div className="booking-header">
                <h4>Book Your Service</h4>

                <p>
                  Fill in your details and confirm your booking.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">
                    Selected Service
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={formData.service}
                    readOnly
                  />
                </div>

                {!formData.service && (
                  <div className="alert alert-warning">
                    Please select a service from the Services page first.
                  </div>
                )}

                {selectedService && (
                  <div className="service-info-card mb-3">
                    <h6>{selectedService.name}</h6>
                    <p>{selectedService.description}</p>
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Service Address
                  </label>

                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter service address"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!formData.service}
                  className="btn btn-primary w-100"
                >
                  {formData.id ? "Update Booking" : "Confirm Booking"}
                </button>

              </form>

            </div>

          </div>

          {/* Booking History */}

          <div className="col-lg-7">

            <h4 className="mb-4">
              Booking History
            </h4>

            {bookings.length === 0 ? (
              <div className="booking-card text-center empty-state">
                <h5>No Bookings Yet</h5>

                <p>
                  Your booked services will appear here.
                </p>
              </div>
            ) : (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="booking-card mb-3"
                >
                  <div className="d-flex justify-content-between align-items-start">

                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <span className="badge bg-primary me-2">
                          Service
                        </span>

                        <h5 className="mb-0">
                          {booking.service}
                        </h5>
                      </div>

                      <p className="mb-1">
                        <strong>Name:</strong>{" "}
                        {booking.name}
                      </p>

                      <p className="mb-1">
                        <strong>Address:</strong>{" "}
                        {booking.address}
                      </p>

                      <p className="mb-0 text-muted">
                        📅 {booking.date}
                      </p>
                    </div>

                    <div className="d-flex gap-2">

                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() =>
                          setFormData(booking)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() =>
                          handleDelete(
                            booking.id
                          )
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                </div>
              ))
            )}

          </div>

        </div>

        {message && (
          <div className="alert alert-success mt-4 text-center">
            {message}
          </div>
        )}

      </div>
    </div>
  );
}

export default MyBookings;
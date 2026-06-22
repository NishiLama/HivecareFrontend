import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/api";
import "../../styles/auth.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      alert("Login Successful!");

      navigate("/");

    } catch (error) {
      alert("Invalid Email or Password");
      console.error(error);
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-card">

          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>
              Sign in to manage your bookings and services.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Sign In
            </button>

          </form>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <a href="/register">
                Create Account
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login; 
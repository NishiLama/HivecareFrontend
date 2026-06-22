import React from "react";
import "../../styles/auth.css";
import { useState } from "react";
import { registerUser } from "../../api/api"

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser({
        name,
        email,
        password
      });

      alert("Registration Successful!");
      console.log(response.data);

    } catch (error) {
      console.error("Registration Error:", error);

      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      }

      alert("Registration Failed!");
    }
  };


  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-5 col-md-7">
            <div className="auth-card">

              <div className="text-center mb-4">
                <h2 className="auth-title">
                  Create Your Account
                </h2>

                <p className="auth-subtitle">
                  Join Hive Care and book trusted professionals
                  for all your home service needs.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                >
                  Create Account
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
import axios from "axios";

const API_BASE = "http://localhost:8080/api"; // adjust if deployed

// Services
export const getServices = () => axios.get(`${API_BASE}/services`);
export const createService = (service) => axios.post(`${API_BASE}/services`, service);

// Bookings
export const getBookings = () => axios.get(`${API_BASE}/bookings`);
export const createBooking = (booking) => axios.post(`${API_BASE}/bookings`, booking);
export const updateBooking = (id, booking) => axios.put(`${API_BASE}/bookings/${id}`, booking);
export const deleteBooking = (id) => axios.delete(`${API_BASE}/bookings/${id}`);

// Users
export const registerUser = (user) => axios.post(`${API_BASE}/users/register`, user);
export const loginUser = (credentials) => axios.post(`${API_BASE}/users/login`, credentials);
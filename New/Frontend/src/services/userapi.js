// api/userApi.js

import axios from "axios";

// Create instance with base URL
const userapi = axios.create({
  baseURL: "http://localhost:4000",
});

// Automatically attach token if available
userapi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// CRUD API methods
export const getUsers = () => userapi.get("/api/users");
export const getUserById = (id) => userapi.get(`/api/users/${id}`);
export const createUser = (data) => userapi.post("/api/users", data);
export const updateUser = (id, data) => userapi.put(`/api/users/${id}`, data);
export const deleteUser = (id) => userapi.delete(`/api/users/${id}`);

export { userapi };

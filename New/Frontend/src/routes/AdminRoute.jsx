import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // Assuming user object is stored

  // Check if token or user doesn't exist
  if (!token || !user) {
    alert("You must be logged in as an admin.");
    return <Navigate to="/login" replace />;
  }

  // Check if user is not an admin
  if (user.role !== "admin") {
    alert("Unauthorized access: Admins only.");
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access
  return children;
};

export default AdminRoute;

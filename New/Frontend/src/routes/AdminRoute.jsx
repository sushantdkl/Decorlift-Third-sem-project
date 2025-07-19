import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!token || !user) {
    alert("You must be logged in as an admin.");
    return <Navigate to="/login" replace />;
  }

  // Check if user is not an admin
  if (!user.isAdmin) {
    alert("Unauthorized access: Admins only.");
    return <Navigate to="/shop" replace />;
  }

  return children;
};

export default AdminRoute;

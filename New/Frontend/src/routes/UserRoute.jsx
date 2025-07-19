import React from "react";
import { Navigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!token || !user) {
    alert("Please login first.");
    return <Navigate to="/login" replace />;
  }

  if (user.isAdmin) {
    return <Navigate to="/admin/products" replace />;
  }

  return children;
};

export default UserRoute;
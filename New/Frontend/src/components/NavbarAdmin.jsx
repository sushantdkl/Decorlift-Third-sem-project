"use client";

// Admin navigation component
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, LogOut, Bell, Boxes, FileQuestion, Repeat, MessageSquare } from "lucide-react";

import { useAuth } from "../contexts/AuthContext";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showRequestOptions, setShowRequestOptions] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    logout(); // Use the context logout function
    navigate("/"); // Go to homepage on logout
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  // Helper to check active path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="border-t-4 border-black bg-[#f9f4ef] shadow-sm w-full z-50">
        <div className="w-full flex items-center justify-between px-8 py-3">
          {/* Left Logo */}
           <div onClick={() => navigate("/admin/products")} className="cursor-pointer flex-shrink-0">
            <img
                src="src/image/logo.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
            />
            </div>

          {/* Center Navigation */}
          <ul className="flex space-x-8 font-medium text-sm text-gray-700 flex-grow justify-center">
            <li>
              <button
                onClick={() => navigate("/admin/products")} // Dashboard = AdminProductPage
                className={`hover:text-teal-600 transition-colors ${isActive("/admin/products") ? "text-teal-600 font-semibold" : ""}`}
              >
                Dashboard
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/admin/inventory")}
                className={`hover:text-teal-600 transition-colors ${isActive("/admin/inventory") ? "text-teal-600 font-semibold" : ""}`}
              >
                <Boxes className="inline w-4 h-4 mr-1" />
                Inventory
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/admin/users")}
                className={`hover:text-teal-600 transition-colors ${isActive("/admin/users") ? "text-teal-600 font-semibold" : ""}`}
              >
                Users
              </button>
            </li>

            <li>
              <div
                onClick={() => setShowRequestOptions(!showRequestOptions)}
                className={`flex items-center cursor-pointer select-none hover:text-teal-600 transition-colors ${
                  location.pathname.startsWith("/admin/refund") || location.pathname.startsWith("/admin/customer-queries")
                    ? "text-teal-600 font-semibold"
                    : ""
                }`}
              >
                <FileQuestion className="inline w-4 h-4 mr-1" />
                Requests
                <span className="ml-1">{showRequestOptions ? "▲" : "▼"}</span>
              </div>

              {showRequestOptions && (
                <div className="absolute mt-8 bg-white shadow-md rounded-md p-2 text-sm">
                  <button
                    onClick={() => {
                      navigate("/admin/refund");
                      setShowRequestOptions(false);
                    }}
                    className={`flex items-center px-3 py-1 rounded-md w-full text-left ${
                      isActive("/admin/refund") ? "bg-teal-600 text-white" : "hover:bg-teal-100"
                    }`}
                  >
                    <Repeat className="mr-2 w-4 h-4" />
                    Refund / Exchange
                  </button>
                  <button
                    onClick={() => {
                      navigate("/admin/customer-queries");
                      setShowRequestOptions(false);
                    }}
                    className={`flex items-center px-3 py-1 rounded-md w-full text-left ${
                      isActive("/admin/customer-queries") ? "bg-teal-600 text-white" : "hover:bg-teal-100"
                    }`}
                  >
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Customer Queries
                  </button>
                </div>
              )}
            </li>
          </ul>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Admin</span>
            </div>

            {/* <button
              onClick={handleLogoutClick}
              className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button> */}
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center max-w-xs">
            <p className="text-gray-700 text-base mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-around">
              <button
                onClick={confirmLogout}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 font-semibold"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 font-semibold"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarAdmin;

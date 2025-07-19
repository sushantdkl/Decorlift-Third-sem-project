"use client";

import { useState } from "react";
import { useLocation, Link, useNavigate, Outlet } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Boxes,
  MessageSquare,
  Repeat,
  FileQuestion,
} from "lucide-react";
import NavbarAdmin from "./NavbarAdmin"; // Adjust path if needed

const AdminProfileLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showRequestOptions, setShowRequestOptions] = useState(false);

  const handleLogoutClick = () => setShowLogoutPopup(true);
  const confirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const cancelLogout = () => setShowLogoutPopup(false);
  const toggleRequestOptions = () => setShowRequestOptions(!showRequestOptions);

  // Highlight links if current route starts with the path
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="flex pt-[60px] min-h-screen">
        {/* Sidebar */}
        <aside className="w-[250px] bg-[#f0f4f4] p-5 flex flex-col shadow-md">
          <div className="flex items-center space-x-4 mb-10 mt-5">
            <div className="w-12 h-12 rounded-full bg-gray-400" />
            <p className="text-gray-700 text-sm">
              Hello
              <br />
              <strong>Admin</strong>
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-left">
            <Link
              to="/admin/products"
              className={`flex items-center px-4 py-2 rounded-md ${
                isActive("/admin/products")
                  ? "bg-teal-600 text-white"
                  : "hover:bg-teal-600 hover:text-white"
              }`}
            >
              <LayoutDashboard className="mr-3 w-4 h-4" /> Dashboard
            </Link>

            <Link
              to="/admin/users"
              className={`flex items-center px-4 py-2 rounded-md ${
                isActive("/admin/users")
                  ? "bg-teal-600 text-white"
                  : "hover:bg-teal-600 hover:text-white"
              }`}
            >
              <Users className="mr-3 w-4 h-4" /> Users
            </Link>

            <Link
              to="/admin/inventory"
              className={`flex items-center px-4 py-2 rounded-md ${
                isActive("/admin/inventory")
                  ? "bg-teal-600 text-white"
                  : "hover:bg-teal-600 hover:text-white"
              }`}
            >
              <Boxes className="mr-3 w-4 h-4" /> Inventory
            </Link>

            <Link
              to="/admin/requests"
              className={`flex items-center px-4 py-2 rounded-md ${
                isActive("/admin/requests")
                  ? "bg-teal-600 text-white"
                  : "hover:bg-teal-600 hover:text-white"
              }`}
            >
              <FileQuestion className="mr-3 w-4 h-4" /> Requests
            </Link>
          </nav>

          <div
            onClick={handleLogoutClick}
            className="mt-auto text-red-600 flex items-center cursor-pointer px-4 py-3 hover:bg-red-100 rounded-md"
          >
            <LogOut className="mr-2 w-4 h-4" /> Logout
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-white shadow-sm p-6"><Outlet/></main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center max-w-xs">
            <p className="text-gray-700 text-base">Are you sure you want to log out?</p>
            <div className="mt-6 flex justify-around">
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
    </div>
  );
};

export default AdminProfileLayout;

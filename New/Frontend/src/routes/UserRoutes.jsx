import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";

// Public Pages
import HomePage from "../public/HomePage";
import AboutPage from "../public/AboutPage";
import ServicesPage from "../public/ServicesPage";
import ContactPage from "../public/ContactPage";
import GalleryPage from "../public/GalleryPage";
import LoginPage from "../public/LoginPage";
import SignUpPage from "../public/SignUpPage";
import SecuritySetupPage from "../public/SecuritySetupPage";
import ResetPasswordPage from "../private/ResetPasswordPage";

// Private Pages
import DiningChairsPage from "../private/DiningChairsPage";
import ArchitecturePage from "../private/ArchitecturePage";
import OfficeChairsPage from "../private/OfficeChairsPage";
import SofaSetsPage from "../private/SofaSetsPage";
import ShopPage from "../private/ShopPage";
import CheckoutPage from "../private/CheckoutPage";
import ProductDetailPage from "../private/ProductDetailPage";
import ProfileInformationPage from "../private/ProfileInformationPage";
import ManageAddressesPage from "../private/ManageAddressesPage";
import OrderHistoryPage from "../private/OrderHistoryPage";
import ReturnRefundPage from "../private/ReturnRefundPage";

// Admin Pages
import AdminProductPage from "../private/AdminProductPage";
import AdminRefundPage from "../private/AdminRefundPage";
import AdminManageUserPage from "../private/AdminManageUserPage";
import AdminRequestPage from "../private/AdminRequestPage";
import AdminCustomerPage from "../private/AdminCustomerPage";
import AdminEditProductPage from "../private/AdminEditProductPage";
import AdminInventoryPage from "../private/AdminInventoryPage";
import AdminAddProductPage from "../private/AdminAddProductPage";
import AdminEditUserPage from "../private/AdminEditUserPage";
import AdminProfileLayout from "../components/AdminProfileLayout";

export default function UserRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/projects" element={<GalleryPage />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        }
      />
      <Route path="/security-setup" element={<SecuritySetupPage />} />
      <Route path="/forgot-password" element={<ResetPasswordPage />} />

      {/* Semi-public product category pages */}
      <Route path="/dining-chairs" element={<DiningChairsPage />} />
      <Route path="/architecture" element={<ArchitecturePage />} />
      <Route path="/office-chairs" element={<OfficeChairsPage />} />
      <Route path="/sofa-sets" element={<SofaSetsPage />} />
      <Route path="/shop" element={<ShopPage />} />

      {/* Private User Routes */}
      <Route
        path="/checkout"
        element={
          <UserRoute>
            <CheckoutPage />
          </UserRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <UserRoute>
            <ProductDetailPage />
          </UserRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <UserRoute>
            <ProfileInformationPage />
          </UserRoute>
        }
      />
      <Route
        path="/manage-addresses"
        element={
          <UserRoute>
            <ManageAddressesPage />
          </UserRoute>
        }
      />
      <Route
        path="/order-history"
        element={
          <UserRoute>
            <OrderHistoryPage />
          </UserRoute>
        }
      />
      <Route
        path="/return-refund"
        element={
          <UserRoute>
            <ReturnRefundPage />
          </UserRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <AdminRoute>
            <AdminProfileLayout />
          </AdminRoute>
        }
      >
        <Route path="products" element={<AdminProductPage />} />
        <Route path="users" element={<AdminManageUserPage />} />
        <Route path="inventory" element={<AdminInventoryPage />} />
        <Route path="add-product" element={<AdminAddProductPage />} />
        <Route path="edit-product/:id" element={<AdminEditProductPage />} />
        <Route path="edit-user/:id" element={<AdminEditUserPage />} />
        <Route path="requests" element={<AdminRequestPage />} />
        <Route path="refund" element={<AdminRefundPage />} />
        <Route path="customer-queries" element={<AdminCustomerPage />} />
      </Route>

      {/* Fallback for unknown routes */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

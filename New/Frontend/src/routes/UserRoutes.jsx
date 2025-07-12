
import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


// Public Pages
import HomePage from '../public/HomePage';
import AboutPage from '../public/AboutPage';
import ServicesPage from '../public/ServicesPage';
import ContactPage from '../public/ContactPage';
import GalleryPage from '../public/GalleryPage';
import LoginPage from '../public/LoginPage';
import SignUpPage from '../public/SignUpPage';
import SecuritySetupPage from '../public/SecuritySetupPage';

// Private Pages
import ResetPasswordPage from '../private/ResetPasswordPage';
import DiningChairsPage from '../private/DiningChairsPage';
import ArchitecturePage from '../private/ArchitecturePage';
import OfficeChairsPage from '../private/OfficeChairsPage';
import SofaSetsPage from '../private/SofaSetsPage';
import ShopPage from '../private/ShopPage';
import CheckoutPage from '../private/CheckoutPage';
import ProductDetailPage from '../private/ProductDetailPage';
import ProfileInformationPage from '../private/ProfileInformationPage';
import ManageAddressesPage from '../private/ManageAddressesPage';
import OrderHistoryPage from '../private/OrderHistoryPage';
import ReturnRefundPage from '../private/ReturnRefundPage';

export default function UserRoutes({ setIsLoggedIn }) {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/projects" element={<GalleryPage />} />
<Route path="/login" element={<LoginPage onLogin={setIsLoggedIn} />} /> {/* ✅ PASS IT HERE */}      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/security-setup" element={<SecuritySetupPage />} />
      <Route path="/forgot-password" element={<ResetPasswordPage />} />

      {/* Private Routes */}
      <Route path="/reset-password" element={
        <PrivateRoute>
          <ResetPasswordPage />
        </PrivateRoute>
      } />
      <Route path="/shop" element={
        <PrivateRoute>
          <ShopPage />
        </PrivateRoute>
      } />
      <Route path="/checkout" element={
        <PrivateRoute>
          <CheckoutPage />
        </PrivateRoute>
      } />
      <Route path="/product/:id" element={
        <PrivateRoute>
          <ProductDetailPage />
        </PrivateRoute>
      } />
      <Route path="/profile" element={
        <PrivateRoute>
          <ProfileInformationPage />
        </PrivateRoute>
      } />
      <Route path="/manage-addresses" element={
        <PrivateRoute>
          <ManageAddressesPage />
        </PrivateRoute>
      } />
      <Route path="/order-history" element={
        <PrivateRoute>
          <OrderHistoryPage />
        </PrivateRoute>
      } />
      <Route path="/return-refund" element={
        <PrivateRoute>
          <ReturnRefundPage />
        </PrivateRoute>
      } />
      <Route path="/dining-chairs" element={
        <PrivateRoute>
          <DiningChairsPage />
        </PrivateRoute>
      } />
      <Route path="/architecture" element={
        <PrivateRoute>
          <ArchitecturePage />
        </PrivateRoute>
      } />
      <Route path="/office-chairs" element={
        <PrivateRoute>
          <OfficeChairsPage />
        </PrivateRoute>
      } />
      <Route path="/sofa-sets" element={
        <PrivateRoute>
          <SofaSetsPage />
        </PrivateRoute>
      } />
    </Routes>
  );
}

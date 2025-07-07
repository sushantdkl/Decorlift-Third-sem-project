import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SecuritySetupPage from './pages/SecuritySetupPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DiningChairsPage from './pages/DiningChairsPage';
import ArchitecturePage from './pages/ArchitecturePage';
import OfficeChairsPage from './pages/OfficeChairsPage';
import SofaSetsPage from './pages/SofaSetsPage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProfileInformationPage from './pages/ProfileInformationPage';
import ManageAddressesPage from './pages/ManageAddressesPage'; 
import OrderHistoryPage from './pages/OrderHistoryPage';
import ReturnRefundPage from './pages/ReturnRefundPage';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/projects" element={<GalleryPage />} />
          <Route path="/dining-chairs" element={<DiningChairsPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/office-chairs" element={<OfficeChairsPage />} />
          <Route path="/sofa-sets" element={<SofaSetsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/security-setup" element={<SecuritySetupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/forgot-password" element={<ResetPasswordPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/profile" element={<ProfileInformationPage />} />
          <Route path="/manage-addresses" element={<ManageAddressesPage />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
          <Route path="/return-refund" element={<ReturnRefundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
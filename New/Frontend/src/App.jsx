import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Layout from './components/Layout';
import HomePage from './public/HomePage';
import AboutPage from './public/AboutPage';
import ServicesPage from './public/ServicesPage';
import ContactPage from './public/ContactPage';
import GalleryPage from './public/GalleryPage';
import LoginPage from './public/LoginPage';
import SignUpPage from './public/SignUpPage';
import SecuritySetupPage from './public/SecuritySetupPage';
import ResetPasswordPage from './private/ResetPasswordPage';
import DiningChairsPage from './private/DiningChairsPage';
import ArchitecturePage from '../private/ArchitecturePage';
import OfficeChairsPage from './private/OfficeChairsPage';
import SofaSetsPage from './private/SofaSetsPage';
import ShopPage from '../private/ShopPage';
import CheckoutPage from './private/CheckoutPage';
import ProductDetailPage from './private/ProductDetailPage';
import ProfileInformationPage from './private/ProfileInformationPage';
import ManageAddressesPage from '../private/ManageAddressesPage'; 
import OrderHistoryPage from './private/OrderHistoryPage';
import ReturnRefundPage from './private/ReturnRefundPage';
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import NavbarGuest from "./components/NavbarGuest";
import NavbarUser from "./components/NavbarUser";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import UserRoutes from "./routes/UserRoutes";

>>>>>>> Niraj_branch
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoggedIn ? <NavbarUser /> : <NavbarGuest />}
      <main className="flex-grow">
        <ScrollToTop />
        <UserRoutes setIsLoggedIn={setIsLoggedIn} /> {/* ✅ fix applied here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======
import React, { useState } from "react";
import NavbarGuest from "./components/NavbarGuest";
import NavbarUser from "./components/NavbarUser";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import UserRoutes from "./routes/UserRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoggedIn ? <NavbarUser /> : <NavbarGuest />}
      <main className="flex-grow">
        <ScrollToTop />
        <UserRoutes setIsLoggedIn={setIsLoggedIn} /> {/* ✅ fix applied here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
=======
>>>>>>> Niraj_branch

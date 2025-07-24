// Main App component
import React from "react";
import { useLocation } from "react-router-dom";

import NavbarGuest from "./components/NavbarGuest";
import NavbarUser from "./components/NavbarUser";
import NavbarAdmin from "./components/NavbarAdmin";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import UserRoutes from "./routes/UserRoutes";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function AppContent() {
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  const hideFooterRoutes = ["/login", "/signup", "/security-setup"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname) || isAdminRoute;

  const renderNavbar = () => {
    if (isLoggedIn && user?.isAdmin) return <NavbarAdmin />;
    return isLoggedIn ? <NavbarUser /> : <NavbarGuest />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {renderNavbar()}

      <main className="flex-grow">
        <ScrollToTop />
        <UserRoutes />
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

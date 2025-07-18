import React, { useState } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
=======
import { useLocation } from "react-router-dom";
>>>>>>> 49cd4cef27059ea0a48263253e45aefb36d634d8

import NavbarGuest from "./components/NavbarGuest";
import NavbarUser from "./components/NavbarUser";
import NavbarAdmin from "./components/NavbarAdmin";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import UserRoutes from "./routes/UserRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");
  const hideFooterRoutes = ["/login", "/signup", "/security-setup"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname) || isAdminRoute;

  const renderNavbar = () => {
    if (isAdminRoute) return <NavbarAdmin />;
    return isLoggedIn ? <NavbarUser /> : <NavbarGuest />;
  };

  return (
<<<<<<< HEAD
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation */}
        {isLoggedIn ? <NavbarUser /> : <NavbarGuest />}

        {/* Main Content */}
        <main className="flex-grow">
          <ScrollToTop />
          <UserRoutes setIsLoggedIn={setIsLoggedIn} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
=======
    <div className="flex flex-col min-h-screen">
      {renderNavbar()}

      <main className="flex-grow">
        <ScrollToTop />
        <UserRoutes setIsLoggedIn={setIsLoggedIn} />
      </main>

      {!shouldHideFooter && <Footer />}
    </div>
>>>>>>> 49cd4cef27059ea0a48263253e45aefb36d634d8
  );
}

export default App;

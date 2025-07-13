import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarGuest from "./components/NavbarGuest";
import NavbarUser from "./components/NavbarUser";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import UserRoutes from "./routes/UserRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
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
  );
}

export default App;

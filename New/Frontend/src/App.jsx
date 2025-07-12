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

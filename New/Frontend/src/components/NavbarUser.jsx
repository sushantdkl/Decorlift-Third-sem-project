import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { logout } from "../services/authService";

const NavbarUser = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black bg-opacity-20">
      {/* Logo */}
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img
          src="src/image/logo.png"
          alt="Logo"
          className="w-16 h-0 object-contain"
        />
      </div>

      {/* Navigation Links - Centered */}
      <ul className="flex space-x-6 text-white font-medium text-sm">
        <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
        <li><Link to="/gallery" className="hover:text-teal-400 transition-colors">Gallery</Link></li>
        <li><Link to="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
        <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
        <li><Link to="/shop" className="hover:text-teal-400 transition-colors">Shop</Link></li>
      </ul>

      {/* Right Side - User Icon and Logout */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/profile")}
          className="text-white hover:text-teal-400 transition-colors"
        >
          <User className="w-5 h-5" />
        </button>
        
      </div>
    </nav>
  );
};

export default NavbarUser;

// User navigation component
import { Link, useLocation, useNavigate } from "react-router-dom";
    import { User } from "lucide-react";
    import nav_bg from "../image/nav_Background.png";

    const NavbarUser = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav
        className={`${
            isHomePage ? "absolute bg-black bg-opacity-20" : "relative shadow"
        } top-0 left-0 w-full z-50 bg-cover bg-center`}
    style={
    !isHomePage
        ? {
            backgroundImage: `url(${nav_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",              // ✅ sets full width      // ✅ (optional: you can also use padding: "0 1rem")
            paddingTop: "1rem",         // ✅ equivalent to py-4 (top)
            paddingBottom: "1rem",      // ✅ (bottom)
        }
        : {}
    }

        >
        {/* ✅ Full-width container with proper padding */}
        <div className="w-full flex items-center justify-between px-8 py-2">
            {/* Logo */}
            <div onClick={() => navigate("/")} className="cursor-pointer flex-shrink-0">
            <img
                src="src/image/logo.png"
                alt="Logo"
                className="w-16 h-16 object-contain"
            />
            </div>

            {/* Navigation Links - Centered */}
            <ul
            className={`flex space-x-8 font-medium text-sm ${
                isHomePage ? "text-white" : "text-white"
            } flex-grow justify-center`}
            >
            <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                Home
                </Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                About Us
                </Link>
            </li>
            <li>
                <Link to="/gallery" className="hover:text-teal-400 transition-colors">
                Gallery
                </Link>
            </li>
            <li>
                <Link to="/services" className="hover:text-teal-400 transition-colors">
                Our Services
                </Link>
            </li>
            <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                Contact Us
                </Link>
            </li>
            <li><Link to="/shop" className="hover:text-teal-400 transition-colors">Shop</Link></li>
            </ul>

            {/* Login Button - Right Side */}
            
        <button
          onClick={() => navigate("/profile")}
          className="text-white hover:text-teal-400 transition-colors"
        >
          <User className="w-5 h-5" />
        </button>
        
        </div>
        
        </nav>
    ); };

    export default NavbarUser;
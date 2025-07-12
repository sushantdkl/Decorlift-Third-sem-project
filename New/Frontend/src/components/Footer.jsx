<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Instagram, Globe, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block border-2 border-gray-800 px-8 py-2 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 tracking-wider">DECORLIFT</h3>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Globe className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center space-x-8 text-gray-600">
          <Link to="/" className="hover:text-gray-800 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-800 transition-colors">
            About Us
          </Link>
          <Link to="/gallery" className="hover:text-gray-800 transition-colors">
            Gallery
          </Link>
          <Link to="/services" className="hover:text-gray-800 transition-colors">
            Our Services
          </Link>
          <Link to="/contact" className="hover:text-gray-800 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
=======
import { Link } from "react-router-dom";
import { Instagram, Globe, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block border-2 border-gray-800 px-8 py-2 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 tracking-wider">DECORLIFT</h3>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Globe className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center space-x-8 text-gray-600">
          <Link to="/" className="hover:text-gray-800 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-800 transition-colors">
            About Us
          </Link>
          <Link to="/gallery" className="hover:text-gray-800 transition-colors">
            Gallery
          </Link>
          <Link to="/services" className="hover:text-gray-800 transition-colors">
            Our Services
          </Link>
          <Link to="/contact" className="hover:text-gray-800 transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> 870caabfc862db6c31f275a100a811a424e06bb2

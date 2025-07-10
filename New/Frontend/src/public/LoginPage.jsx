import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User } from "lucide-react"

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Later you can integrate actual login logic here
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/public/backgrounds.png')",
      }}
    >
      {/* Navbar */}
      <nav className="w-full px-8 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <img
          src="src/public/aayush_logo.png"
          alt="Logo"
          className="w-20 cursor-pointer" // <-- Controlled size
          onClick={() => navigate("/")}
        />

        <ul className="flex space-x-8 uppercase text-white font-sans text-sm">
          <li>
            <Link to="/" className="hover:text-teal-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-teal-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-teal-500">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-teal-500">
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-teal-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-teal-500 font-semibold border-b-4 border-teal-500 pb-1"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login Form */}
      <div className="w-[400px] bg-white bg-opacity-90 p-8 rounded-lg text-black">
        <h2 className="text-center text-2xl font-bold mb-6">Sign In</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              required
              className="w-full p-2 mb-4 rounded bg-gray-100 text-black text-sm"
            />

            <label htmlFor="password" className="block font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter your password"
              required
              className="w-full p-2 mb-2 rounded bg-gray-100 text-black text-sm"
            />

          <Link
            to="/forgot-password"
            className="text-xs text-right block text-black hover:underline mb-4"
          >
            Forgot password?
          </Link>

            <button
              type="submit"
              className="w-full py-3 bg-[#518581] hover:bg-[#3e0e3e] text-white font-bold rounded transition-colors"
            >
              Sign In
            </button>

            <Link
              to="/signup"
              className="flex justify-center mt-4 text-sm text-black hover:underline"
            >
              Don't have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

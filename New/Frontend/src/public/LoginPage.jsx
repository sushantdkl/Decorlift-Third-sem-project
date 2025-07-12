<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { User } from "lucide-react"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Later you can integrate actual login logic here
  }
=======
// public/LoginPage.jsx
=======
>>>>>>> 6753375c8f9ed152eb0af56aff50f012cf48d746
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      try {
        const response = await axios.post("http://localhost:4000/api/auth/login", formData);
        const { token, user } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          onLogin(true);
          if (user.isAdmin) {
            navigate("/adminproductpage");
          } else {
            navigate("/");
          }
        } else {
          alert("Please register first");
        }
      } catch (error) {
        alert("Please register first");
      }
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/public/backgrounds.png')",
      }}
    >
      {/* Login Form */}
      <div className="w-[400px] bg-white bg-opacity-90 p-8 rounded-lg text-black">
        <h2 className="text-center text-2xl font-bold mb-6">Sign In</h2>

        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full p-2 mb-4 rounded bg-gray-100 text-sm"
            placeholder="Enter your email"
          />

          <label htmlFor="password" className="block font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            className="w-full p-2 mb-2 rounded bg-gray-100 text-sm"
            placeholder="Enter your password"
          />

          <Link
            to="/forgot-password"
            className="text-xs text-right block text-black hover:underline mb-4"
          >
            Forgot password?
          </Link>

          <button
            type="submit"
            className="w-full py-3 bg-[#518581] hover:bg-[#3e0e3e] text-white font-bold rounded"
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
  );
};

export default LoginPage;
<<<<<<< HEAD
>>>>>>> d17139aa86b154f6c2784353bed1549301db0d12
=======
// public/LoginPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      console.log("Logging in with:", formData);
      onLogin(true); // ✅ calling the function passed from App.jsx
      navigate("/");
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/public/backgrounds.png')",
      }}
    >
      {/* Login Form */}
      <div className="w-[400px] bg-white bg-opacity-90 p-8 rounded-lg text-black">
        <h2 className="text-center text-2xl font-bold mb-6">Sign In</h2>

        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full p-2 mb-4 rounded bg-gray-100 text-sm"
            placeholder="Enter your email"
          />

          <label htmlFor="password" className="block font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            className="w-full p-2 mb-2 rounded bg-gray-100 text-sm"
            placeholder="Enter your password"
          />

          <Link
            to="/forgot-password"
            className="text-xs text-right block text-black hover:underline mb-4"
          >
            Forgot password?
          </Link>

          <button
            type="submit"
            className="w-full py-3 bg-[#518581] hover:bg-[#3e0e3e] text-white font-bold rounded"
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
  );
};

export default LoginPage;
>>>>>>> 870caabfc862db6c31f275a100a811a424e06bb2
=======
>>>>>>> 6753375c8f9ed152eb0af56aff50f012cf48d746

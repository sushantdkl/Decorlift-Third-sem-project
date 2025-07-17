import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");

    const { firstName, lastName, email, password, confirmPassword, gender } = formData;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save data to localStorage (simulate registration)
    localStorage.setItem("pendingUser", JSON.stringify(formData));
    navigate("/security-setup");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('src/image/backgrounds.png')",
      }}
    >
      <div className="bg-white bg-opacity-90 max-w-md w-full rounded-lg p-8 shadow-lg text-black">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="flex space-x-4">
            <div className="flex flex-col flex-1">
              <label className="font-semibold mb-1">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-semibold mb-1">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="font-semibold mb-1 block">Gender</label>
            <div className="flex space-x-6">
              {["male", "female"].map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    required
                    className="mr-2 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="text-gray-700 capitalize">{gender}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className={`w-full px-3 py-2 pr-10 rounded-md border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-teal-400`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                  })
                }
                required
                className="w-full px-3 py-2 pr-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-md transition"
          >
            Continue
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-800">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-600 hover:underline font-semibold"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

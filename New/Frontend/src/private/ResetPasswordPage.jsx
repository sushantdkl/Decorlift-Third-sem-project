import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { forgotPassword, resetPassword } from '../services/authService';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');

  // Handle sending reset password email
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const data = await forgotPassword(formData.email);
      setMessage(data.message || 'Reset link sent! Check your email.');
    } catch {
      setMessage('Failed to send password reset email.');
    }
  };

  // Handle resetting password with token
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const data = await resetPassword(token, formData.newPassword);
      alert(data.message || 'Password reset successful!');
      navigate('/login');
    } catch {
      alert('Failed to reset password.');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
              {!token ? (
                <p className="text-gray-600">Enter your email to receive reset link</p>
              ) : (
                <p className="text-gray-600">Enter your new password</p>
              )}
            </div>

            {token ? (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <PasswordInput
                  label="New Password"
                  value={formData.newPassword}
                  onChange={(val) => setFormData((f) => ({ ...f, newPassword: val }))}
                  show={showPassword}
                  toggleShow={() => setShowPassword((v) => !v)}
                />

                <PasswordInput
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(val) => setFormData((f) => ({ ...f, confirmPassword: val }))}
                  show={showConfirmPassword}
                  toggleShow={() => setShowConfirmPassword((v) => !v)}
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 rounded-lg hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Reset Password
                </button>
              </form>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 rounded-lg hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Reset Link
                </button>
              </form>
            )}

            {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                ← Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PasswordInput = ({ label, value, onChange, show, toggleShow }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}:</label>
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
        placeholder={label}
        required
      />
      <button
        type="button"
        onClick={toggleShow}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
      >
        {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
  </div>
);

export default ResetPasswordPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';


const SecuritySetupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    securityQuestion: '',
    answer: '',
  });
  const [loading, setLoading] = useState(false);

  const securityQuestions = [
    "What is your mother's maiden name?",
    "What was the name of your first pet?",
    "What is your favorite movie?",
    "In which city were you born?",
    "What was your first car?",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem("pendingUser"));
    if (!userData) {
      alert("No user data found. Please sign up again.");
      return navigate("/signup");
    }

    if (!formData.securityQuestion || !formData.answer.trim()) {
      alert("Please select a security question and provide an answer.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:2000/api/users", {
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        password: userData.password,
        securityQuestion: formData.securityQuestion,
        securityAnswer: formData.answer.trim(),
      });

      localStorage.removeItem("pendingUser");
      alert("Registered successfully!");
      navigate("/login");
    } catch (error) {
      const errMsg = error.response?.data?.message || "Registration failed";
      alert(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('src/public/background.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md">
          {/* Security Setup Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Security Setup</h2>
              <p className="text-gray-600">Set up your security question for account recovery</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="securityQuestion" className="block text-sm font-medium text-gray-700 mb-2">
                  Security Question
                </label>
                <div className="relative">
                  <select
                    id="securityQuestion"
                    value={formData.securityQuestion}
                    onChange={(e) => setFormData({ ...formData, securityQuestion: e.target.value })}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm appearance-none"
                    required
                    disabled={loading}
                  >
                    <option value="">Select a question</option>
                    {securityQuestions.map((question, index) => (
                      <option key={index} value={question}>
                        {question}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                  Answer
                </label>
                <input
                  type="text"
                  id="answer"
                  value={formData.answer}
                  onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your answer"
                  required
                  disabled={loading}
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Make sure to remember your answer as it will be used for account recovery.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:from-teal-700 hover:to-teal-800"
                }`}
              >
                {loading ? "Completing..." : "Complete Setup"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate('/login')}
                className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                disabled={loading}
              >
                ← Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySetupPage;

import { userapi } from "./userapi";
 
export const login = async (credentials) => {
  try {
    const response = await userapi.post("/api/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
 
export const signup = async (userData) => {
    try {
      const response = await userapi.post("/api/users", userData);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

export const logout = () => {
  localStorage.removeItem("token");
};
 
export const forgotPassword = async (email) => {
  try {
    const response = await userapi.post("/api/auth/forgot-password", { email });
    return response.data;
  } catch (error) {
    console.error("Forgot password failed:", error);
    throw error;
  }
};
 
export const resetPassword = async (token, password) => {
  try {
    const response = await userapi.post(`/api/auth/reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    console.error("Reset password failed:", error);
    throw error;
  }
};
 
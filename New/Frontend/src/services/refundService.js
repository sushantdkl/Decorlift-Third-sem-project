import axios from "axios";

const API_BASE_URL = "http://localhost:4000/api/returns";

export const getRefundRequests = async () => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching refund requests:", error);
    throw error;
  }
};

export const approveRefundRequest = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}/approve`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error approving refund request:", error);
    throw error;
  }
};

export const declineRefundRequest = async (id) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}/decline`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error declining refund request:", error);
    throw error;
  }
};

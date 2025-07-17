import { userapi } from "./userapi";
 
export const getProductRequests = async () => {
  try {
    const response = await userapi.get("/api/requests"); // Assuming this is the correct endpoint
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product requests:", error);
    throw error;
  }
};
 
export const approveProductRequest = async (id) => {
  try {
    const response = await userapi.put(`/api/requests/${id}/approve`); // Assuming this is the correct endpoint
    return response.data;
  } catch (error) {
    console.error("Failed to approve product request:", error);
    throw error;
  }
};
 
export const declineProductRequest = async (id) => {
  try {
    const response = await userapi.put(`/api/requests/${id}/decline`); // Assuming this is the correct endpoint
    return response.data;
  } catch (error) {
    console.error("Failed to decline product request:", error);
    throw error;
  }
};
 
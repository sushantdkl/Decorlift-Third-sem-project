import { userapi } from "./userapi";
 
export const getRefundRequests = async () => {
  try {
    const response = await userapi.get("/api/returns");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch refund requests:", error);
    throw error;
  }
};
 
export const approveRefundRequest = async (id) => {
  try {
    const response = await userapi.put(`/api/returns/${id}/approve`);
    return response.data;
  } catch (error) {
    console.error("Failed to approve refund request:", error);
    throw error;
  }
};
 
export const declineRefundRequest = async (id) => {
  try {
    const response = await userapi.put(`/api/returns/${id}/decline`);
    return response.data;
  } catch (error) {
    console.error("Failed to decline refund request:", error);
    throw error;
  }
};
 
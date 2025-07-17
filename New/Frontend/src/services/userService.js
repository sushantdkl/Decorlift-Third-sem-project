import { userapi } from "./userapi";
 
export const getUsers = async () => {
  try {
    const response = await userapi.get("/api/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
 
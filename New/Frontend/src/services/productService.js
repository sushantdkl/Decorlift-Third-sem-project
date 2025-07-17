import { userapi } from "./userapi";
 
export const getProducts = async () => {
  try {
    const response = await userapi.get("/api/products");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
 
export const getProductById = async (id) => {
  try {
    const response = await userapi.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch product with id ${id}:`, error);
    throw error;
  }
};
 
import { userapi } from "./userapi.js";

export const getUsers = () => {
  return userapi.get("/api/users");
};

export const getAddressesByUserId = (userId) => {
  return userapi.get(`/api/addresses/user/${userId}`);
};

export const deleteUser = (userId) => {
  return userapi.delete(`/api/users/${userId}`);
};
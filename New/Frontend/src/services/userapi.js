import axios from "axios";
 
const API = "http://localhost:2000/api/users";
 
export const getUsers = () => axios.get(API);
export const getUserById = (id) => axios.get(`${API}/${id}`);
export const createUser = (data) => axios.post(API, data);
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);

const AUTH_API = "http://localhost:2000/api/auth";

export const loginUser = (credentials) => {
  return axios.post(`${AUTH_API}/login`, credentials);
};

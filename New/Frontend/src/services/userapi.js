import axios from "axios";
 
const API = "http://localhost:3000/api/users";
 
export const getUsers = () => axios.get(API);
export const getUserById = (id) => axios.get(`${API}/${id}`);
export const createUser = (data) => axios.post(API, data);
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteUser = (id) => axidos.delete(`${API}/${id}`);
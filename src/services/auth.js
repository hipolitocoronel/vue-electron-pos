import axios from "axios";
const baseUrl = "http://localhost:3301/api";

const login = async (userData) => {
    const { data } = await axios.post(`${baseUrl}/login`, userData);
    return data;
};

const register = async (userData) => {
    const { data } = await axios.post(`${baseUrl}/register`, userData);
    return data;
};
const updateUser = async (userData) => {
    const { data } = await axios.put(`${baseUrl}/users`, userData);
    return data;
};

const getAllUsers = async () => {
    const { data } = await axios.get(`${baseUrl}/users`);
    return data;
};

export default { login, register, updateUser, getAllUsers };

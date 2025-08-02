import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllOrchids = () => axios.get(BASE_URL);
export const getOrchid = (id) => axios.get(`${BASE_URL}/${id}`);
export const createOrchid = (data) => axios.post(BASE_URL, data);
export const updateOrchid = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteOrchid = (id) => axios.delete(`${BASE_URL}/${id}`);

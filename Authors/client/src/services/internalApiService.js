import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllDestinations = async () => {
    const res = await http.get('/destinations');
    return res.data;
};

export const getDestinationById = async (id) => {
    const res = await http.get(`/destinations/${ id }`);
    return res.data;
};

export const createDestination = async (data) => {
    const res = await http.post(`/destinations`, data);
};

export const updateDestinationById = async (id, data) => {
    const res = await http.put(`/destinations/${ id }`, data);
    return res.data;
};

export const deleteDestinationById = async (id) => {
    const res = await http.delete(`/destinations/${ id }`);
    return res.data;
};
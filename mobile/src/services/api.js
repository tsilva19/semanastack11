import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.10.101:3335'
});

export default api;
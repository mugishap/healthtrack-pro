import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://healthtrack-xmaw.onrender.com/api/v1'
})
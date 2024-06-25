import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `https://12swap.io/api/v1/`,
});

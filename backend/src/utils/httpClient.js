import axios from 'axios';

const httpClient = axios.create();
console.log("API token" + process.env.ACCESS_TOKEN)
httpClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.ACCESS_TOKEN}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default httpClient;
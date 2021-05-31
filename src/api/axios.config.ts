import axios from 'axios';

const baseURL = 'http://182.92.180.36:30000/joinoauth';

const Axios = axios.create({
  baseURL,
  timeout: 20000,
  responseType: 'json',
});

Axios.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem('UIN_TOKEN') || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Axios.interceptors.response.use(
  (res) => {
    if (res.headers?.token) {
      localStorage.setItem('UIN_TOKEN', res.headers?.token);
    }
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;

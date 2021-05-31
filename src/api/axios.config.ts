import axios from 'axios';

const baseURL = 'http://182.92.180.36:30000/joinoauth';

const Axios = axios.create({
  baseURL,
  timeout: 20000,
  responseType: 'json',
});

export default Axios;

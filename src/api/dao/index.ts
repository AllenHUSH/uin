import axios from '../axios.config';

const login = (params: Record<string, any>): Promise<Record<string, any>> => {
  return new Promise((resolve, reject) => {
    axios
      .post('/user/login', { ...params })
      .then((res: Record<string, any>) => {
        resolve(res);
      })
      .catch((err: Record<string, any>) => {
        reject(err);
      });
  });
};

export default {
  login,
};

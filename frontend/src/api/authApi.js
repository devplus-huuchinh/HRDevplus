import axiosClient from './axiosClient';

const authApi = {
   csrfCookie: (data) => {
      const baseURL = 'https://localhost:8900/sanctum/csrf-cookie';
      return axiosClient.get(baseURL, data);
   },

   login: (data) => {
      const url = '/auth/login';
      return axiosClient.post(url, data);
   },
};

export default authApi;

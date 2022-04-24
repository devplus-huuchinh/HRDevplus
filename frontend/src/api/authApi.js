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

   logout: () => {
      const url = '/auth/logout';
      return axiosClient.post(url);
   },

   userInfo: () => {
      const url = '/auth';
      return axiosClient.get(url);
   },

   changePassword: (data) => {
      const url = '/auth/change-password';
      return axiosClient.patch(url, data);
   },
};

export default authApi;

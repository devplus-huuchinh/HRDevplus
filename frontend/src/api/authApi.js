import axiosClient from './axiosClient';

const authApi = {
   csrfCookie: (data) => {
      const baseURL = `${process.env.REACT_APP_NAME}/sanctum/csrf-cookie`;
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

   forgotPassword: (params) => {
      const url = '/auth/forgot-password';
      return axiosClient.get(url, { params });
   },

   resetPassword: (data) => {
      const url = '/auth/reset-password';
      return axiosClient.post(url, data);
   },
};

export default authApi;

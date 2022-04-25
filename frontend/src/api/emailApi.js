import axiosClient from './axiosClient';

const emailApi = {
   resetPasswordEmail: (params) => {
      const url = '/email/reset-password';
      return axiosClient.get(url, { params });
   },
};

export default emailApi;

import axiosClient from './axiosClient';

const emailApi = {
   receiveConfirmation: (params) => {
      const url = '/mail/receive-confirmation';
      return axiosClient.get(url, { params });
   },
};

export default emailApi;

import axiosClient from './axiosClient';

const emailApi = {
   receiveConfirmation: (params) => {
      const url = '/mail/receive-confirmation';
      return axiosClient.get(url, { params });
   },

   rejectCv: (params) => {
      const url = '/mail/reject-cv';
      return axiosClient.get(url, { params });
   },

   inviteTest: (params) => {
      const url = '/mail/invite-test';
      return axiosClient.get(url, { params });
   },

   inviteInterview: (params) => {
      const url = '/mail/invite-interview';
      return axiosClient.get(url, { params });
   },

   rejectAfterTest: (params) => {
      const url = '/mail/reject-after-test';
      return axiosClient.get(url, { params });
   },

   acceptCv: (params) => {
      const url = '/mail/accept-cv';
      return axiosClient.get(url, { params });
   },
};

export default emailApi;

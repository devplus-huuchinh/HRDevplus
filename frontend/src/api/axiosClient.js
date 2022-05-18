import axios from 'axios';

const axiosClient = axios.create({
   withCredentials: true,
   baseURL: `${process.env.REACT_APP_NAME}/api/v1/`,
   headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
   },
});

axiosClient.interceptors.request.use(async (config) => {
   const token = localStorage.getItem('id_token');
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }

   return config;
});

axiosClient.interceptors.response.use((response) => {
   if (response && response.data) {
      return response.data;
   }
   return response;
});

export default axiosClient;

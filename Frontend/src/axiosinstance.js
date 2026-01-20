import axios from "axios"


const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
  baseURL: baseURL,

})

// request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
    
    return config;
  }, function (error) {
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => /* This function returns true */}
);


export default axiosInstance
import axios from "axios";


const axiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    timeout: 4000,
    timeoutErrorMessage: "Request timeout ... Please try again",
  });
  return instance;
};
export default axiosInstance


// const adminAxiosInstance = axiosInstance(AdminBaseURL);

// adminAxiosInstance.interceptors.request.use(async (req) => {
//   const token = localStorage.getItem("adminToken");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });


// export default adminAxiosInstance
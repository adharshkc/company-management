import axios from "axios";

const AdminBaseURL = 'http://localhost:3000/api/v1/admin/'

const axiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    timeout: 4000,
    timeoutErrorMessage: "Request timeout ... Please try again",
  });
  return instance;
};

const adminAxiosInstance = axiosInstance(AdminBaseURL);

adminAxiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});


export default adminAxiosInstance
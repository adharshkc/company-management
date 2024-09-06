import { Dayjs } from "dayjs";
import { employeeAxiosInstance } from "../apis/employeeAxiosInstance";
import { Otp } from "../types/types";

export const checkSession = async () => {
  return await employeeAxiosInstance.get("/check-session");
};

export const verifyOtp = async ({ email, otp }: Otp) => {
  return await employeeAxiosInstance.post("/verify-otp", { email, otp });
};

export const employeeLogin = async (email: string) => {
  return await employeeAxiosInstance.post("/login", { email });
};

export const getSprints = async () => {
  return await employeeAxiosInstance.get("/projects/sprints");
};

export const createSprint = async (name: string) => {
  return await employeeAxiosInstance.post("/projects/sprints/add", { name });
};

export const updateSprint = async (
  name: string,
  startDate: Date | undefined,
  endDate: Dayjs | Date | null | undefined,
  sprintId:number|string
) => {
  return await employeeAxiosInstance.put(`/projects/sprints/update/${sprintId}`, {
    name,
    startDate,
    endDate,
  });
};


export const deleteSprint = async (sprintId:number)=>{
  return await employeeAxiosInstance.delete(`/projects/sprints/delete/${sprintId}`)
}
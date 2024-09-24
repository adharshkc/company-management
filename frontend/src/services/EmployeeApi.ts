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

export const getSprints = async (project_id: string | null) => {
  return await employeeAxiosInstance.get(`/projects/${project_id}/sprints`);
};

export const getSingleSprint = async (sprint_id:number)=>{
  return await employeeAxiosInstance.get(`/projects/sprints/${sprint_id}`)
}
export const getStartedSprints = async (project_id: string | null)=>{
  return await employeeAxiosInstance.get(`/projects/${project_id}/sprints/started`)
}

export const createSprint = async (name: string, project_id: string | null) => {
  return await employeeAxiosInstance.post(`/projects/${project_id}/sprints/`, {
    name,
  });
};

export const updateSprint = async (
  name: string,
  startDate: Date | undefined,
  endDate: Dayjs | Date | null | undefined,
  sprintId: number | string
) => {
  return await employeeAxiosInstance.put(`/projects/sprints/`, {
    name,
    startDate,
    endDate,
    sprintId,
  });
};

export const changeSprintStatus=async(status:string, sprint_id:number|string)=>{
  return await employeeAxiosInstance.patch(`/projects/sprints/${sprint_id}`, {status})
}

export const deleteSprint = async (sprintId: number) => {
  return await employeeAxiosInstance.delete(`/projects/sprints/${sprintId}`);
};

export const createIssue = async (name: string, sprintId: number) => {
  console.log(sprintId);
  return await employeeAxiosInstance.post("/projects/sprints/issues", {
    name,
    sprintId,
  });
};

export const getIssue = async (sprintId: number) => {
  return await employeeAxiosInstance.get(
    `/projects/sprints/${sprintId}/issues`
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateIssue = async (issueId: number, updatedIssue: any) => {
  return await employeeAxiosInstance.put("/projects/sprints/issues", {
    issueId,
    updatedIssue,
  });
};

export const deleteIssue = async (issueId: number) => {
  return await employeeAxiosInstance.delete(
    "/projects/sprints/issues/" + issueId
  );
};

export const updateIssueStatus = async (status: string, issue_id?: number) => {
  return await employeeAxiosInstance.patch(
    `/projects/sprints/issues/${issue_id}/update-status`,
    { status }
  );
};

export const updateIssueName = async (issueName: string, issue_id?: number) => {
  return await employeeAxiosInstance.patch(
    `/projects/sprints/issues/${issue_id}/update-name`,
    { issueName }
  );
};

export const updateIssueDescription = async (description?:string, issue_id?:number)=>{
  return await employeeAxiosInstance.patch(`/projects/sprints/issues/${issue_id}/update-description`, {description})
}

export const fetchProject = async () => {
  return await employeeAxiosInstance.get(`/projects/single`);
};

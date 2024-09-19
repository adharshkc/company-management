import { fetchProject } from "../services/EmployeeApi";

export const useFetchProject = () => {
  return async function getProject() {
    const response = await fetchProject();
    const project_id = response.data.projects.project_id;
    console.log(project_id);
    localStorage.setItem("project_id", response.data?.projects?.project_id);
  };
};

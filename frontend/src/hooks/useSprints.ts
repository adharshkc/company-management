import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changeSprintStatus,
  createSprint,
  deleteSprint,
  getSprints,
  getStartedSprints,
  updateSprint as sprintUpdate,
} from "../services/EmployeeApi";
import { Dayjs } from "dayjs";

const fetchSprints = async () => {
  const project_id = localStorage.getItem("project_id")
  const response = await getSprints(project_id);
  return response.data.sprints;
};

export const useFetchSprints = () => {
  return useQuery({
    queryKey: ["sprints"],
    queryFn: fetchSprints,
    refetchOnWindowFocus: false,
  });
};

const addSprint = async (sprintName: string) => {
  const project_id = localStorage.getItem("project_id")
  await createSprint(sprintName, project_id);
};

export const useAddSprint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSprint,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sprints"],
      });
    },
  });
};

const updateSprint = async ({
  name,
  startDate,
  endDate,
  sprint_id,
}: {
  name: string;
  startDate: Date | undefined;
  endDate: Dayjs | Date | null | undefined;
  sprint_id: number;
}) => {
  await sprintUpdate(name, startDate, endDate, sprint_id);
};

export const useUpdateSprint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateSprint,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sprints"],
      });
    },
  });
};

const updateSprintStatus = async({status, sprint_id}:{status:string, sprint_id:number})=>{
  await changeSprintStatus(status, sprint_id)
}

export const useUpdateSprintStatus = ()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:updateSprintStatus,
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:["sprints"],
      })
    }
  })
}

const sprintDelete = async (sprint_id: number) => {
  await deleteSprint(sprint_id);
};

export const useDeleteSprint = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: sprintDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sprints"],
      });
    },
  });
}
  const singleSprintFetch = async ()=>{
    const project_id = localStorage.getItem("project_id")
    const response = await getStartedSprints(project_id);
    return response.data.sprint;
  }
  export const useFetchStartedSprint = ()=>{
    return useQuery({
      queryKey: ["startedSprint", ],
      queryFn: singleSprintFetch,
      refetchOnWindowFocus: false,
    });
  }

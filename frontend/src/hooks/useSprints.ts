// import { useCallback } from "react";
// import { useSprintStore } from "../zustand/SprintStore";
// import { deleteSprint, getSprints, updateSprint } from "../services/EmployeeApi";
// import useErrorStore from "../zustand/ErrorStore";
// import { Dayjs } from "dayjs";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createSprint,
  deleteSprint,
  getSprints,
  updateSprint as sprintUpdate,
} from "../services/EmployeeApi";
import { Dayjs } from "dayjs";

// export const useSprints = function () {
//   const { sprints, loading, setFetchSprint, setLoading } = useSprintStore();
//   const { setError, error } = useErrorStore();

//   const sprintUpdate = async (
//     name: string,
//     startDate: Date | undefined,
//     endDate: Dayjs | Date | null | undefined,
//     sprintId: number
//   ) => {
//     try {
//       const response = await updateSprint(name, startDate, endDate, sprintId);
//       return response;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       if (error.response.data.message) {
//         // setError(error.response.data.message);
//       }
//     }
//   };

//   const sprintDelete = async(sprintId:number)=>{
//     try {
//       const response = await deleteSprint(sprintId)
//       return response
//      // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       console.log(error)
//       if (error?.response?.data?.message) {
//         setError(error.response.data.message);
//       }
//     }
//   }
//   return { sprints, loading, error, fetchSprints, sprintUpdate, sprintDelete };
// };
const fetchSprints = async () => {
  const response = await getSprints();
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
  await createSprint(sprintName);
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
};

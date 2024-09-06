import { useCallback } from "react";
import { useSprintStore } from "../zustand/SprintStore";
import { deleteSprint, getSprints, updateSprint } from "../services/EmployeeApi";
import useErrorStore from "../zustand/ErrorStore";
import { Dayjs } from "dayjs";

export const useSprints = function () {
  const { sprints, loading, setFetchSprint, setLoading } = useSprintStore();
  const { setError, error } = useErrorStore();

  const fetchSprints = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getSprints();
      setFetchSprint(response?.data?.sprints);
      if (response) {
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Something went wrong...");
    }
  }, [setFetchSprint, setLoading, setError]);

  const sprintUpdate = async (
    name: string,
    startDate: Date | undefined,
    endDate: Dayjs | Date | null | undefined,
    sprintId: number
  ) => {
    try {
      const response = await updateSprint(name, startDate, endDate, sprintId);
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response.data.message) {
        // setError(error.response.data.message);
      }
    }
  };

  const sprintDelete = async(sprintId:number)=>{
    try {
      const response = await deleteSprint(sprintId)
      return response
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  }
  return { sprints, loading, error, fetchSprints, sprintUpdate, sprintDelete };
};

import { create } from "zustand";

export const useSprintStore = create((set) => ({
  isAddSprint: false,
  loading: false,
  sprints: null,
  setIsAddSprint: (status: boolean) => set({ isAddSprint: status }),
  setFetchSprint: (data) => set({ sprints: data, loading: false }),
  setLoading: (loading: boolean) => set({ loading }),
}));

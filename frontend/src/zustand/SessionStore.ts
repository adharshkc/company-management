import { checkSession } from "../services/EmployeeApi";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SessionStore = {
  isAuthenticated: boolean;
  setIsAuthenticated: (authStatus: boolean) => void;
  checkSession: () => Promise<void>;
};

export const useSessionStore = create(
  persist<SessionStore>((set) => ({
  
    isAuthenticated: false,
    setIsAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),
    checkSession: async () => {
      try {
        const response = await checkSession();
        if (response.status === 200) {
          console.log(response);
          set({ isAuthenticated: true });
        } else {
          set({ isAuthenticated: false });
        }
      } catch (error) {
        set({ isAuthenticated: false });
      }
    },  
  }),
{
    name:'session-storage',
    storage:createJSONStorage(()=>localStorage)
})
);

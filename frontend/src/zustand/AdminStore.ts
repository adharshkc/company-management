import { create } from "zustand";

interface AdminStore {
  admin: object | null;
  setAdmin: (admin: object) => void;
}

const useAdminStore = create<AdminStore>((set) => ({
  admin: {},
  setAdmin: (admin) => {
    set({admin});
  },
}));

export default useAdminStore;

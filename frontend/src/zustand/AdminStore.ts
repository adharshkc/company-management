import { AdminType } from "types/types";
import { create } from "zustand";

interface AdminStore<T> {
  admin: T | null;
  isAdminAuth: boolean|null;
  setAdmin: (admin: T) => void;
  adminLogin: ()=>void;
  adminLogout: ()=>void
}

const useAdminStore = create<AdminStore<AdminType>>((set) => ({
  admin: null,
  isAdminAuth: false,
  setAdmin: (admin:AdminType) => {
    set({admin});
  },
  adminLogin: ()=>{
    set({isAdminAuth: true})
  },
  adminLogout:()=>{
    set({isAdminAuth: false})
    set({admin:null})
  }
}));

export default useAdminStore;

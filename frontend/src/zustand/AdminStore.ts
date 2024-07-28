import { create } from "zustand";

interface AdminStore {
  admin: object | null;
  isAdminAuth: boolean|null;
  setAdmin: (admin: object) => void;
  adminLogin: ()=>void;
  adminLogout: ()=>void
}

const useAdminStore = create<AdminStore>((set) => ({
  admin: {},
  isAdminAuth: false,
  setAdmin: (admin) => {
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

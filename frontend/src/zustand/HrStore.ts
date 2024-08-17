import { HrType } from "../types/types";
import { create } from "zustand";

interface Hrstore<T> {
  hr: T | null;
  isHrAuth: boolean|null;
  setHr: (hr: T) => void;
  hrLogin: ()=>void;
  hrLogout: ()=>void
}

const useHrStore = create<Hrstore<HrType>>((set) => ({
  hr: null,
  isHrAuth: false,
  setHr: (hr:HrType) => {
    set({hr});
  },
  hrLogin: ()=>{
    set({isHrAuth: true})
  },
 hrLogout:()=>{
    set({isHrAuth: false})
    set({hr:null})
  }
}));

export default useHrStore;

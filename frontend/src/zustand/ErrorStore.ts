import toast from "react-hot-toast";
import { create } from "zustand"


interface ErrorState{
    error: string|null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setError: (error: string|any)=>void;
    clearError: ()=>void
}

const useErrorStore = create<ErrorState>((set)=>({
    error: null,
    setError: (error)=>{
        toast.error(error)
        set({error})},
    clearError: ()=>set({error: null})
}) )

export default useErrorStore;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";



export const useIssueStore = create((set)=>({
    loading:false,
    issues:null,
    setFetchSprint:(data:any)=>set({issues:data}),
    setLoading:(loading:boolean)=>set({loading})
}))
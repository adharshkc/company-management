import {create} from "zustand"




type AuthStore={
    accessToken:string|null;
    setAccessToken: (accessToken:string)=>void
}


const useAuthStore = create<AuthStore>((set)=>({
    accessToken:null,
    setAccessToken:(accessToken)=>{
        set({accessToken})
    }
}))

export default useAuthStore;
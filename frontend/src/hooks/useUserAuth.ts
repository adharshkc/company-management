import useAdminStore from "../zustand/AdminStore";
import { AdminDetails } from "../services/AdminApi"
import { useEffect } from "react";



const useUserAuth =  function(){

    const {adminLogin, adminLogout} = useAdminStore()
    const checkAuth = async()=>{
        try {
            const response = await AdminDetails()
            if(response.status ===200){
                adminLogin()
            }
        } catch (error) {
            adminLogout()
        }
    }
    // useEffect(()=>{
        checkAuth()
    // },[])
}

export default useUserAuth;
import { useSessionStore } from "../zustand/SessionStore";
import { useUserAuth } from "../hooks/useUserAuth"
import {Navigate, Outlet } from "react-router-dom"


const EmployeeProtectedRoute = ()=>{
    useUserAuth()
    const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
    return isAuthenticated?<Outlet/>:<Navigate to="/login" replace/>


}

export default EmployeeProtectedRoute
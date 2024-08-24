import Otp from "../pages/employees/Otp"
import Login from "../pages/employees/Login"
import { Route, Routes } from "react-router-dom"
import EmployeeProtectedRoute from "./EmployeeProtectedRoutes"
import Dashboard from "../pages/employees/Dashboard"
import EmployeeLayout from "../layouts/EmployeeLayout"




const EmployeeRoute = function(){
    return (
        <Routes>
            <Route path = "/login" element={<Login/>}/>
            <Route path="/verify-otp" element={<Otp/>}/>
            <Route element={<EmployeeProtectedRoute/>}>
            <Route element={<EmployeeLayout/>}>
            
                <Route path="/" element={<Dashboard/>}/>
            </Route>
            </Route>
        </Routes>
    )
}

export default EmployeeRoute
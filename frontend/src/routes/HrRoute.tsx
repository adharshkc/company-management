import HrLogin from "../pages/hr/HrLogin"
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import Otp from "../pages/hr/Otp"
import Dashboard from "../pages/hr/Dashboard"




const HrRoute = function(){
    return (
        <Routes>
            <Route path="/login" element={<HrLogin/>}/>
            <Route path="/verify-otp" element={<Otp/>}/>
            <Route element={<ProtectedRoutes token="hrToken"/>}>
                <Route path="/" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default HrRoute
import HrLogin from "../pages/hr/HrLogin"
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"
import Otp from "../pages/hr/Otp"




const HrRoute = function(){
    return (
        <Routes>
            <Route path="/login" element={<HrLogin/>}/>
            <Route path="/verify-otp" element={<Otp/>}/>
            <Route element={<ProtectedRoutes token="hrToken"/>}>

            </Route>
        </Routes>
    )
}

export default HrRoute
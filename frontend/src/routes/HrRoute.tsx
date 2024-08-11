import HrLogin from "../pages/hr/HrLogin"
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./ProtectedRoutes"



const HrRoute = function(){
    return (
        <Routes>
            <Route path="/login" element={<HrLogin/>}/>
            <Route element={<ProtectedRoutes token="hrToken"/>}>

            </Route>
        </Routes>
    )
}

export default HrRoute
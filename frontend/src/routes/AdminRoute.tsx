import AdminLogin from "../pages/AdminLogin";
import { Route, Routes } from "react-router-dom";


const AdminRoute = ()=>{
    return (
        <Routes>
            <Route path="/login" element={<AdminLogin/>}/>
        </Routes>
    )
}

export default AdminRoute
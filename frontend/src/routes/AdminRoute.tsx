
import Dashboard from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";
import { Route, Routes } from "react-router-dom";


const AdminRoute = ()=>{
    return (
        <Routes>
            <Route path="/login" element={<AdminLogin/>}/>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>
    )
}

export default AdminRoute

import { LoginCard } from "@components/ui/organism/Login/LoginCard";
import { Route, Routes } from "react-router-dom";


const UserRoute = ()=>{
    return (
        <Routes>
            <Route path="/login" element={<LoginCard />}/>
        </Routes>
    )
}

export default UserRoute
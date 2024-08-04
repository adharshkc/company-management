
import { LoginCard } from "@components/organism/Login/LoginCard";
import { Route, Routes } from "react-router-dom";


const UserRoute = ()=>{
    return (
        <Routes>
            <Route path="/login" element={<LoginCard />}/>
        </Routes>
    )
}

export default UserRoute
import HrLogin from "../pages/hr/HrLogin";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Otp from "../pages/hr/Otp";
import Dashboard from "../pages/hr/Dashboard";
import HrLayout from "../layouts/HrLayout";
import Employee from "../pages/hr/Employee";
import Attendance from "../pages/hr/Attendance";

const HrRoute = function () {
  return (
    <Routes>
      <Route path="/login" element={<HrLogin />} />
      <Route path="/verify-otp" element={<Otp />} />
      <Route element={<ProtectedRoutes token="hrToken" />}>
        <Route element={<HrLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employee/>}/>
          <Route path="/attendance" element={<Attendance/>}/>
        </Route>
      </Route>
    </Routes>
  );
};

export default HrRoute;

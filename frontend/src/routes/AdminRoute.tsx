import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";
import ProtectedRoutes from "./ProtectedRoutes";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;

import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import ProtectedRoutes from "./ProtectedRoutes";
import ProjectDashboard from "../pages/admin/ProjectDashboard";
import AdminLayout from "../layouts/AdminLayout";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectDashboard />} />
          <Route path="/projects/add" element={<ProjectDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoute;

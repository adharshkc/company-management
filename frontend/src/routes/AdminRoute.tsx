import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import ProtectedRoutes from "./ProtectedRoutes";
import ProjectDashboard from "../pages/admin/ProjectDashboard";
import AdminLayout from "../layouts/AdminLayout";
import CreateProject from "../pages/admin/CreateProject";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectDashboard />} />
        </Route>
        <Route path="/projects/add" element={<CreateProject />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;

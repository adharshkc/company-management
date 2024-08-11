import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLogin from "../pages/admin/AdminLogin";
import ProtectedRoutes from "./ProtectedRoutes";
import ProjectDashboard from "../pages/admin/ProjectDashboard";
import AdminLayout from "../layouts/AdminLayout";
import CreateProject from "../pages/admin/CreateProject";
import SingleProject from "../pages/admin/SingleProject";
import EmployeeDashboard from "../pages/admin/EmployeeDashboard";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route element={<ProtectedRoutes token="adminToken"/>}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectDashboard />} />
          <Route path="/projects/:id"element={<SingleProject/>}/>
          <Route path="/employees"element={<EmployeeDashboard/>}/>
        </Route>
        <Route path="/projects/add" element={<CreateProject />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;

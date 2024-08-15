import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../zustand/AuthStore";

type ProjectedRoutesProps = {
  token: string;
};
const ProtectedRoutes: React.FC<ProjectedRoutesProps> = ({ token }) => {
  const { accessToken } = useAuthStore();
  console.log(accessToken);
  if (token === "adminToken") {
    const adminToken = localStorage.getItem(token);
    if (!adminToken) {
      return <Navigate to="/admin/login" />;
    }
  }
  if (token === "hrToken") {
    if (!accessToken) {
      const hrToken = localStorage.getItem("hrToken");
      console.log(hrToken);
      if (!hrToken) {
        return <Navigate to="/hr/login" />;
      }
    }
  }
  return <Outlet />;
};

export default ProtectedRoutes;

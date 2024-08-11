import { Navigate, Outlet } from "react-router-dom";

type ProjectedRoutesProps={
  token:string
}
const ProtectedRoutes:React.FC<ProjectedRoutesProps> = ({token}) => {
  if(token ==='adminToken'){
  const adminToken = localStorage.getItem(token);
  if (!adminToken) {
    return <Navigate to="/admin/login" />;
  }}
  if(token ==='hrToken'){
  const hrToken = localStorage.getItem(token);
  if (!hrToken) {
    return <Navigate to="/admin/login" />;
  }}
  return <Outlet />;
};

export default ProtectedRoutes;

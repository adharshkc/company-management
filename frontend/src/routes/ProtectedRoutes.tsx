import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

type ProtectedRoutesProps = {
  token: string;
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (token === "adminToken") {
        const adminToken = localStorage.getItem(token);
        if (!adminToken) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      }

      if (token === "hrToken") {
          const hrToken = localStorage.getItem("hrToken");
          if (!hrToken) {
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true);
          }
        }

      setLoading(false);
    };

    checkAuthentication();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return token === "adminToken" ? <Navigate to="/admin/login" /> : <Navigate to="/hr/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;

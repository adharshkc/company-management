import AdminDashboard from "@components/templates/admin/DashboardTemplate";
import useAdminStore from "../..//zustand/AdminStore";
import { AdminDetails } from "../../services/AdminApi";
import useErrorStore from "../../zustand/ErrorStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { setError } = useErrorStore();
  const { admin, setAdmin } = useAdminStore();
  const navigate = useNavigate()
  const fetchAdmin = async function () {
    try {
      const response = await AdminDetails();
      const adminDetails = response.data?.admin;
      setAdmin(adminDetails);
    } catch (error) {
      setError("couldn't connect server");
      navigate('/admin/login')
    }
  };
  useEffect(() => {
    if (Object.keys(admin as object).values.length === 0) {
      fetchAdmin();
    }
  }, []);
  return <AdminDashboard adminUsername={admin} />;
};

export default Dashboard;

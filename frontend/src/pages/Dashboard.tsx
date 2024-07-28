import AdminDashboard from "@components/ui/templates/AdminDashboardTemplate";
import useAdminStore from "../zustand/AdminStore";
import { AdminDetails } from "../services/AdminApi";
import useErrorStore from "../zustand/ErrorStore";
import { useEffect } from "react";

const Dashboard = () => {
  const { setError } = useErrorStore();
  const { admin, setAdmin } = useAdminStore();
  const fetchAdmin = async function () {
    try {
      const response = await AdminDetails();
      const adminDetails = response.data?.admin;
      setAdmin(adminDetails);
    } catch (error) {
      setError("couldn't connect server");
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

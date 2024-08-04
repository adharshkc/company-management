import { Outlet, useNavigate } from "react-router-dom"
import style from "../components/styles/adminLayout.module.scss"
import AdminSidebar from "@components/organism/Sidebar/AdminSidebar" 
import Navbar from "@components/organism/Navbar/Navbar"
import useErrorStore from "../zustand/ErrorStore"
import useAdminStore from "../zustand/AdminStore"
import { AdminDetails } from "../services/AdminApi"
import { useEffect } from "react"

const AdminLayout = () => {
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
  return (
    <div className={style.body}>
        <AdminSidebar/>
        <Navbar username={admin}/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout
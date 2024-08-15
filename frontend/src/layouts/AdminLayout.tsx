import { Outlet, useNavigate } from "react-router-dom";
import style from "../components/styles/adminLayout.module.scss";
import useErrorStore from "../zustand/ErrorStore";
import useAdminStore from "../zustand/AdminStore";
import { AdminDetails } from "../services/AdminApi";
import { useEffect } from "react";
import { AdminType, NavbarLayout, SideLayout } from "../types/types";
import CommonNav from "@components/organism/Navbar/CommonNav";
import homeIcon from "../assets/icons/house-solid 1 (1).svg";
import homeIconDark from "../assets/icons/house-solid 1.svg";
import employeesIcon from "../assets/icons/employees.svg";
import employeesIconDark from "../assets/icons/users-solid 1 (1).svg";
import channelIcon from "../assets/icons/hashtag-solid 1.svg";
import channelIconDark from "../assets/icons/hashtag-solid 1 (2).svg";
import projectIconDark from "../assets/icons/list-check-solid 1 (1).svg";
import projectIcon from "../assets/icons/project.svg";
import Sidebar from "@components/organism/Sidebar/Sidebar";

const AdminLayout = () => {
  const { setError } = useErrorStore();
  const { admin, setAdmin } = useAdminStore();
  const username = admin?.name;
  const navigate = useNavigate();
  const layout: NavbarLayout[] = [
    { id: 1, name: "Dashboard", path: "/admin/" },
    { id: 2, name: "Projects", path: "/admin/projects" },
    { id: 3, name: "Employees", path: "/admin/employees" },
    { id: 4, name: "Channels", path: "/admin/channels" },
  ];
  const sideBarLayout: SideLayout[] = [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin/",
      darkIcon: homeIconDark,
      lightIcon: homeIcon,
    },
    {
      id: 2,
      name: "Projects",
      path: "/admin/projects",
      darkIcon: projectIconDark,
      lightIcon: projectIcon,
    },
    {
      id: 3,
      name: "Employees",
      path: "/admin/employees",
      darkIcon: employeesIconDark,
      lightIcon: employeesIcon,
    },
    {
      id: 4,
      name: "Channels",
      path: "/admin/channels",
      darkIcon: channelIconDark,
      lightIcon: channelIcon,
    },
  ];
  const fetchAdmin = async function () {
    try {
      const response = await AdminDetails();
      const adminDetails = response.data?.admin;
      setAdmin(adminDetails);
    } catch (error) {
      setError("couldn't connect server");
      navigate("/admin/login");
    }
  };
  useEffect(() => {
    if (!admin || Object.keys(admin as AdminType).length === 0) {
      fetchAdmin();
    }
  }, []);
  return (
    <div className={style.body}>
      <Sidebar layout={sideBarLayout} />
      <CommonNav username={username} layout={layout} />
      <Outlet />
    </div>
  );
};

export default AdminLayout;

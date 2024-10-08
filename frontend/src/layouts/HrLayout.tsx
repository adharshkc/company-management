import CommonNav from "@components/organism/Navbar/CommonNav";
import { HrType, NavbarLayout, SideLayout } from "../types/types";
import Sidebar from "@components/organism/Sidebar/Sidebar";
import homeIcon from "../assets/icons/house-solid 1 (1).svg";
import homeIconDark from "../assets/icons/house-solid 1.svg";
import employeesIcon from "../assets/icons/employees.svg";
import employeesIconDark from "../assets/icons/users-solid 1 (1).svg";
import channelIcon from "../assets/icons/hashtag-solid 1.svg";
import channelIconDark from "../assets/icons/hashtag-solid 1 (2).svg";
import attendanceIconLight from "../assets/icons/attendanceLight.svg";
import attendanceIconDark from "../assets/icons/attendanceDark.svg";
import teamIconDark from "../assets/icons/people-group-solid 1.svg"
import teamIconLight from "../assets/icons/people-group-solid 1 (1).svg"
import { useEffect } from "react";
import { getHr } from "../services/HrApi";
import useHrStore from "../zustand/HrStore";
import useErrorStore from "../zustand/ErrorStore";
import { Outlet, useNavigate } from "react-router-dom";

const HrLayout = () => {
  const {setError} = useErrorStore()
  const {hr, setHr} = useHrStore()
  const navigate = useNavigate()
  const username = hr?.name
  const layout: NavbarLayout[] = [
    { id: 1, name: "Dashboard", path: "/hr/" },
    { id: 2, name: "Employees", path: "/hr/employees" },
    { id: 3, name: "Attendance", path: "/hr/attendance" },
    { id: 4, name: "Channels", path: "/hr/channels" },
  ];
  const sideLayout: SideLayout[] = [
    {
      id: 1,
      name: "Dashboard",
      path: "/hr/",
      darkIcon: homeIconDark,
      lightIcon: homeIcon,
    },
    {
      id: 2,
      name: "Employees",
      path: "/hr/employees",
      darkIcon: employeesIconDark,
      lightIcon: employeesIcon,
    },
    {
      id: 3,
      name: "Attendance",
      path: "/hr/attendance",
      darkIcon: attendanceIconDark,
      lightIcon: attendanceIconLight,
    },
    {
      id: 4,
      name: "Teams",
      path: "/hr/teams",
      darkIcon: teamIconDark,
      lightIcon: teamIconLight,
    },
    {
      id: 5,
      name: "Channels",
      path: "/hr/channels",
      darkIcon: channelIconDark,
      lightIcon: channelIcon,
    },
  ];

  const fetchHr = async function () {
    try {
      const response = await getHr();
      const hrDetails = response.data?.hr;
      setHr(hrDetails);
    } catch (error) {
      setError("couldn't connect server");
      navigate("/hr/login");
    }
  };
  useEffect(() => {
    if (!hr || Object.keys(hr as HrType).length === 0) {
      fetchHr();
    }
  }, []);
  return (
    <div>
      <CommonNav username={username} layout={layout} />
      <Sidebar layout={sideLayout} />
      <Outlet/>
    </div>
  );
};

export default HrLayout;

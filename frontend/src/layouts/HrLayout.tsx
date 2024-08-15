import CommonNav from "@components/organism/Navbar/CommonNav";
import { NavbarLayout, SideLayout } from "../types/types";
import Sidebar from "@components/organism/Sidebar/Sidebar";
import homeIcon from "../assets/icons/house-solid 1 (1).svg";
import homeIconDark from "../assets/icons/house-solid 1.svg";
import employeesIcon from "../assets/icons/employees.svg";
import employeesIconDark from "../assets/icons/users-solid 1 (1).svg";
import channelIcon from "../assets/icons/hashtag-solid 1.svg";
import channelIconDark from "../assets/icons/hashtag-solid 1 (2).svg";
import attendanceIconLight from "../assets/icons/attendanceLight.svg";
import attendanceIconDark from "../assets/icons/attendanceDark.svg";

const HrLayout = () => {
  const username = "adharsh";
  console.log(attendanceIconDark);
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
      name: "Channels",
      path: "/hr/channels",
      darkIcon: channelIconDark,
      lightIcon: channelIcon,
    },
  ];
  return (
    <div>
      <CommonNav username={username} layout={layout} />
      <Sidebar layout={sideLayout} />
    </div>
  );
};

export default HrLayout;

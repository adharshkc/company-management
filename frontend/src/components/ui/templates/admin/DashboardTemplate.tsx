import BarChart from "@components/ui/organism/BarChart";
import Navbar from "@components/ui/organism/Navbar";
import Sidebar from "@components/ui/organism/AdminSidebar";
import style from "../../../styles/adminDashboardTemplate.module.scss";
import { Typography } from "../../atoms/typography/Typography";
import Quotes from "../../molecules/Quotes"
import ProjectStatics from "../../organism/ProjectStatics";
import TodoContainer from "../../organism/TodoContainer";
import TaskContainer from "../../organism/TaskContainer";

type AdminDashboardProps = {
  adminUsername: string|null|object
}

const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  return (
      <div className={style.bodyPart}>
        <div className={style.chart}>
          <Typography variant="h6">Project Status</Typography>
          <BarChart />
          <TaskContainer/>
        </div>
        <div className={style.quote}>
          {/* <Quotes /> */}
          <ProjectStatics />
          <TodoContainer />
        </div>
      </div>
    // <div className={style.body}>
      //{/* <Sidebar /> */}
      //{/* <Navbar username = {adminUsername}/> */}
    // </div>
  );
};

export default AdminDashboard;

import BarChart from "@components/ui/organism/BarChart";
import Navbar from "@components/ui/organism/Navbar";
import Sidebar from "@components/ui/organism/Sidebar";
import style from "../../styles/adminDashboardTemplate.module.scss";
import { Typography } from "../atoms/typography/Typography";
import Quotes from "../molecules/Quotes"
import ProjectStatics from "../organism/ProjectStatics";
import TodoContainer from "../organism/TodoContainer";
import TaskContainer from "../organism/TaskContainer";

const AdminDashboard = () => {
  return (
    <div className={style.body}>
      <Sidebar />
      <Navbar />
      <div className={style.bodyPart}>
        <div className={style.chart}>
          <Typography variant="h6">Project Status</Typography>
          <BarChart />
          <TaskContainer/>
        </div>
        <div className={style.quote}>
          <Quotes />
          <ProjectStatics />
          <TodoContainer />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import BarChart from "@components/organism/Charts/BarChart";
import style from "../../../components/styles/adminDashboardTemplate.module.scss";
import { Typography } from "../../atoms/typography/Typography";
import ProjectStatics from "../../organism/ProjectStatics";
import TodoContainer from "../../organism/Todo/TodoContainer";
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

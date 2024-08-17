// import BarChart from "@components/organism/Charts/BarChart";
import Clock from "@components/organism/Clock/Clock";
import style from "../../../components/styles/hrDashboardTemplate.module.scss";
import { Typography } from "../../atoms/typography/Typography";
import TodoContainer from "../../organism/Todo/TodoContainer";


const DashboardTemplate = () => {
  return (
    <div className={style.bodyPart}>
      {/* <Quotes /> */}
      <Clock />
      <TodoContainer />
    {/* </div> */}
  </div>
  )
}

export default DashboardTemplate
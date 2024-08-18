// import BarChart from "@components/organism/Charts/BarChart";
import Clock from "@components/organism/Clock/Clock";
import style from "../../../components/styles/hrDashboardTemplate.module.scss";
import TodoContainer from "../../organism/Todo/TodoContainer";
import EmployeeStatics from "@components/organism/Statistics/EmployeeStatics";


const DashboardTemplate = () => {
  return (
    <div className={style.bodyPart}>
      {/* <Quotes /> */}
      <div>

      <Clock />
      </div>
      <div>
        <EmployeeStatics/>
      <TodoContainer />
      </div>
    {/* </div> */}
  </div>
  )
}

export default DashboardTemplate
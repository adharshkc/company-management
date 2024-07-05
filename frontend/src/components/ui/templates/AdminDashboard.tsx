import BarChart from "@components/ui/organism/BarChart"
import Navbar from "@components/ui/organism/Navbar"
import Sidebar from "@components/ui/organism/Sidebar"
import style from "../../styles/adminDashboardTemplate.module.scss"
import { Typography } from "../atoms/typography/Typography"
import Quotes from "../molecules/Quotes"


const AdminDasboard = () => {
  return (
    <>
      <div>

      <Sidebar/>
      </div>
      <div>

        <Navbar/>
      </div>
      <div className={style.bodyPart}>

    <div className={style.chart}>
        <Typography variant="h6">Project Status</Typography>
        <BarChart/>
      </div>
      <div className={style.quote}>
        <Quotes/>
      </div>
      </div>
        </>
  )
}

export default AdminDasboard
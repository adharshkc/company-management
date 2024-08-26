
import { Box } from "@mui/material"
// import { Button } from "@components/atoms/button/Button"
// import { Link } from "react-router-dom"
// import {theme} from "../../../theme"
import style from "../../styles/hrAttendanceTemplate.module.scss"
import AttendanceTable from "@components/organism/Table/AttendanceTable"
import Header from "@components/molecules/Header"

const AttendanceTemplate = () => {
  return (
    <div className={style.bodyPart}><Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <Header header1="Dashboard" header2="Attendance"/>
    {/* <Link to={"/admin/projects/add"}>
      <Button
        sx={{
          backgroundColor: theme.palette.primary.dark,
          color: "white",
          marginRight: 4,
          "&:hover": {
            backgroundColor: "secondary.main",
          },
        }}
      >
        Add Employee
      </Button>
    </Link> */}
  </Box>
    {/* <Box className={style.line}></Box> */}
    <Box marginRight="35px">
      {/* <AttendanceTable/> */}

    </Box>
  </div>
  )
}

export default AttendanceTemplate
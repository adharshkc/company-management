import { Typography } from "@components/atoms/typography/Typography"
import { Box } from "@mui/material"
// import { Button } from "@components/atoms/button/Button"
// import { Link } from "react-router-dom"
// import {theme} from "../../../theme"
import style from "../../styles/hrAttendanceTemplate.module.scss"
import AttendanceTable from "@components/organism/Table/AttendanceTable"

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
    <Typography variant="body1" className={style.heading}>
      <span className={style.heading1}>Dashboard </span>
      <span className="heading2">/ Attendance</span>{" "}
    </Typography>
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
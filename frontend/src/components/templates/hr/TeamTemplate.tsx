import { Box } from "@mui/material"
import style from "../../styles/hrTeamTemplate.module.scss"
import { Typography } from "@components/atoms/typography/Typography"
import { Button } from "@components/atoms/button/Button"
import {theme} from "../../../theme"
import { useState } from "react"
import AddTeam from "@components/organism/Form/AddTeam"
import toast, { Toaster } from "react-hot-toast"
import { createTeam } from "../../../services/HrApi"

const TeamTemplate = () => {
  const [openModal, setOpenModal] = useState(false)

  const addTeam = async(name:string)=>{
    try {
      await createTeam(name)
      toast.success("Team created successfully")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      if(error.response.data.error.message){
        toast.error(error.response.data.error.message)
      }else{

        toast.error("something went wrong")
      }
    }
  }
  const handleModal = (bool:boolean)=>{
    setOpenModal(bool)
  }
  return (
    <div className={style.bodyPart}>
      <Toaster position="top-right"/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="body1" className={style.heading}>
          <span className={style.heading1}>Dashboard </span>
          <span className="heading2">/ Employees</span>{" "}
        </Typography>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              marginRight: 4,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
            onClick = {()=>setOpenModal(true)}
          >
            Add Employee
          </Button>
      </Box>
      <Box>
        {openModal&& <AddTeam addTeam={addTeam} openModal={handleModal}/>}
      </Box>
    </div>
  )
}

export default TeamTemplate
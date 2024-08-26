import { Box } from "@mui/material"
import style from "../../styles/hrTeamTemplate.module.scss"
import { Button } from "@components/atoms/button/Button"
import {theme} from "../../../theme"
import { useState } from "react"
import AddTeam from "@components/organism/Form/AddTeam"
import toast, { Toaster } from "react-hot-toast"
import { createTeam } from "../../../services/HrApi"
import { useTeams } from "../../../hooks/useTeams"
import TeamCard from "@components/organism/Cards/TeamCard"
import { TeamType } from "../../../types/types"
import Header from "@components/molecules/Header"

const TeamTemplate = () => {
  const [openModal, setOpenModal] = useState(false)
  const {teams, getTeams} = useTeams()

  const addTeam = async(name:string)=>{
    try {
      await createTeam(name)
      setOpenModal(false)
      toast.success("Team created successfully")
      getTeams()
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
        <Header header1="Dashboard" header2="Teams"/>
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
            Add Team
          </Button>
      </Box>
      <Box 
      sx={{display:"flex", justifyContent:"flex-start", width:"100%", marginY:5 , flexWrap:"wrap", gap:2}}
      >{
        teams.map((team:TeamType)=>(

          <TeamCard key={team?.team_id} team={team}/>
        ))
      }
        
      </Box>
      <Box>
        {openModal&& <AddTeam addTeam={addTeam} openModal={handleModal}/>}
      </Box>
    </div>
  )
}

export default TeamTemplate
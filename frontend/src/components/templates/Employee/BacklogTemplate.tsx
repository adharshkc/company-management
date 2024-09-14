/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@components/molecules/Header";
import style from "../../styles/backlogTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Sprint from "@components/organism/Sprints/Sprint";
import { useEffect } from "react";
import { useSprints } from "../../../hooks/useSprints";
import { createSprint } from "../../../services/EmployeeApi";
import { useIssueStore } from "../../../zustand/IssueStore";
import IssueDetails from "@components/organism/Issues/IssueDetails";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const BacklogTemplate = () => {
  const {sprints, loading, error, fetchSprints} = useSprints()
  const {isModalIssue} = useIssueStore()
  console.log(isModalIssue)
  useEffect(()=>{
    fetchSprints()}
  , [fetchSprints])

  const addSprint = async function(){
    
    const sprintName = `Sprint ${sprints.length+1}`
    try {
      console.log(sprintName)
      const response = await createSprint(sprintName)
      if(response.status===200){
  
        fetchSprints()
      }
    } catch (error) {
      console.log(error)
    }
  }
  if(error){
    console.log(error)
    return(
      <div className={style.bodyPart}>
        <h3>Something went wrong!!!</h3>
        <h5>Please reload the page</h5>
      </div>
    )
  }
  if(loading){
    return (
      <div className={style.bodyPart}>
        <h3>Loading!!!</h3>
      </div>)
  }
  return (
    <>
      <Dialog open={isModalIssue} BackdropProps={{
    style: {
      backdropFilter: 'blur(0px)', // Adjust the blur value to your preference
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the background opacity
    },
  }}>
      <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
</Dialog>
  

    <div className={style.bodyPart}>
      <div className={style.header}>
        <Header header1="Home" header2="Backlog" />
        <Button
          sx={{
            backgroundColor: theme.palette.primary.dark,
            color: "white",
            marginRight: 4,
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
          onClick={addSprint}
        >
          create sprint
        </Button>
      </div>
      
      {
        (sprints===null||sprints.length===0)?(<h1>No sprints found</h1>):<div className={style.sprints}>
          {sprints.map((sprint)=>(
            <Sprint key={sprint.sprint_id} sprint={sprint}/>
          ))}
          </div>
      }
      
    </div>
    </>
  );
};

export default BacklogTemplate;

/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@components/molecules/Header";
import style from "../../styles/backlogTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Sprint from "@components/organism/Sprints/Sprint";
import { useEffect } from "react";
import { useSprints } from "../../../hooks/useSprints";
import { createSprint } from "../../../services/EmployeeApi";
const BacklogTemplate = () => {
  const {sprints, loading, error, fetchSprints} = useSprints()
  console.log(loading)
  useEffect(()=>{
    fetchSprints()}
  , [fetchSprints])

  const addSprint = async function(){
    const sprintName = `Sprint ${sprints.length+1}`
    try {
      const response = await createSprint(sprintName)
      if(response.status===200){
  
        fetchSprints()
      }
    } catch (error) {
      console.log(error)
    }
  }
  if(error){
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
          {sprints.map(()=>(
            <Sprint/>
          ))}
          </div>
      }
    </div>
  );
};

export default BacklogTemplate;

/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@components/molecules/Header";
import style from "../../styles/backlogTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Sprint from "@components/organism/Sprints/Sprint";
import { useEffect, useState } from "react";
import { useSprints } from "../../../hooks/useSprints";
const BacklogTemplate = () => {
  const {sprints, loading, error, fetchSprints} = useSprints()
  console.log(loading)
  console.log(sprints)
  useEffect(()=>{
    fetchSprints()}
  , [fetchSprints])

  const addSprint = 
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
          // onClick={createSprint}
        >
          create sprint
        </Button>
      </div>
      
      {
        sprints===null?(<h1>Loading</h1>):<div className={style.sprints}>
          {sprints.map(()=>(
            <Sprint/>
          ))}
          </div>
      }
    </div>
  );
};

export default BacklogTemplate;

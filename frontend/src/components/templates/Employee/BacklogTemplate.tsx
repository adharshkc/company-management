import Header from "@components/molecules/Header";
import style from "../../styles/backlogTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Sprint from "@components/organism/Sprints/Sprint";
import { useState } from "react";
const BacklogTemplate = () => {
  const [sprints, setSprints] = useState([])
  const createSprint = ()=>{

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
          // onClick = {()=>setOpenModal(true)}
        >
          create sprint
        </Button>
      </div>
      <div className={style.sprints}>
        {/* {sprints.map((sprint)=>(

        ))} */}
        <Sprint/>
      </div>
    </div>
  );
};

export default BacklogTemplate;

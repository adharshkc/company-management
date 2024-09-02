/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@components/molecules/Header";
import style from "../../styles/backlogTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Sprint from "@components/organism/Sprints/Sprint";
import { useState } from "react";
const BacklogTemplate = () => {
  const [sprints, setSprints] = useState<number[]>([]);
  const createSprint = () => {
    console.log("thisd", sprints);
    setSprints((old: number[]) => [...old, 1]);
  };
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
          onClick={createSprint}
        >
          create sprint
        </Button>
      </div>
      <div className={style.sprints}>
        {sprints.map(() => (
          <>
            <Sprint />
          </>
        ))}
      </div>
    </div>
  );
};

export default BacklogTemplate;

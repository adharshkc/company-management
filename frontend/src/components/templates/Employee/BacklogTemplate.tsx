/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@components/molecules/Header";
import style from "../../styles/backlogTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Sprint from "@components/organism/Sprints/Sprint";
import { useAddSprint, useFetchSprints } from "../../../hooks/useSprints";
import { useIssueStore } from "../../../zustand/IssueStore";
import IssueDetails from "@components/organism/Issues/IssueDetails";
import { Dialog } from "@mui/material";
import { Sprint as SprintType } from "../../../types/types";

const BacklogTemplate = () => {
  const { data: sprints, error, isLoading } = useFetchSprints();
  const { mutate: createSprint } = useAddSprint();

  const { isModalIssue } = useIssueStore();

  const addSprint = async function () {
    const sprintName = `Sprint ${sprints.length + 1}`;
    console.log(sprintName);
    createSprint(sprintName);
  };
  if (error) {
    console.log(error);
    return (
      <div className={style.bodyPart}>
        <h3>Something went wrong!!!</h3>
        <h5>Please reload the page</h5>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={style.bodyPart}>
        <h3>Loading!!!</h3>
      </div>
    );
  }
  return (
    <>
      <Dialog
        open={isModalIssue}
        slotProps={{
          backdrop: {
            style: {
              width: "auto",
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          },
        }}
      >
        <IssueDetails />
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

        {sprints === null || sprints.length === 0 ? (
          <h1>No sprints found</h1>
        ) : (
          <div className={style.sprints}>
            {sprints?.map((sprint: SprintType) => (
              <Sprint key={sprint.sprint_id} sprint={sprint} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BacklogTemplate;

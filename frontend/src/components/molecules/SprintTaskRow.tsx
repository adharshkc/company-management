import { Typography } from "@components/atoms/typography/Typography";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useRef, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@components/atoms/button/Button";
import EmptySprintRow from "./EmptySprintRow";
import { useIssueStore } from "../../zustand/IssueStore";
import style from "../styles/issueDetail.module.scss";
import IssueDetails from "@components/organism/Issues/IssueDetails";

const SprintTaskRow = ({ issue }) => {
  console.log(issue);
  const [status, setStatus] = useState(issue?.status);
  const [sprintEdit, setSprintEdit] = useState<boolean>(false);
  const { isModalIssue, setIsModalIssue, setIssues } = useIssueStore();
  const editRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (editRef.current && !editRef.current.contains(event.target as Node)) {
        setSprintEdit(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editRef]);
  const handleOpenIssueModal = () => {
    setIsModalIssue(true);
    setIssues({
      issue_id: issue.issue_id,
      name: issue.name,
      status: issue.status,
      assignee_id: issue.assingee_id,
      description: issue.description,
    });
  };
  const handleUpdate = (issueName: string) => {
    try {
      // const response =
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e: SelectChangeEvent<string>) =>
    setStatus(e.target.value);

  const editClick = () => {
    setSprintEdit(true);
  };
  if (!issue) {
    return <h3>loading</h3>;
  }
  return (
    <>
    {/* {isModalIssue && (
          
        <div className={style.issueDetail}>
          <IssueDetails />
        </div>
        
      )} */}

{/* <div className={style.issueDetail}>
  <IssueDetails />
</div> */}


      {sprintEdit ? (
        <Box ref={editRef}>
          <EmptySprintRow issueHandler={handleUpdate} issueName={issue.name} />
        </Box>
      ) : (
        <Box
          sx={{
            borderBottom: "1px solid #C9D4E4",
            paddingY: 1,
            paddingX: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            "&:hover .edit-icon": {
              visibility: "visible",
            },
          }}
          onClick={handleOpenIssueModal}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="body2"
              sx={{ fontSize: "16px", fontWeight: 400 }}
            >
              {issue.name}
            </Typography>
            <EditIcon
              className="edit-icon"
              onClick={editClick}
              sx={{
                visibility: "hidden",
                height: "25px",
                padding: "5px",
                marginX: 2,
                "&:hover": {
                  backgroundColor: "#E4E6EA",
                  cursor: "pointer",
                  borderRadius: "5px",
                },
              }}
            />
          </Box>
          <Box>
            <FormControl variant="standard" size="small" style={{}}>
              <Select
                value={status}
                onChange={handleChange}
                sx={{ fontSize: "0.75rem", padding: "4px" }}
                disableUnderline
              >
                <MenuItem value="Todo" sx={{ fontSize: "0.75rem" }}>
                  TODO
                </MenuItem>
                <MenuItem value="In Progress" sx={{ fontSize: "0.75rem" }}>
                  IN PROGRESS
                </MenuItem>
                <MenuItem value="Done" sx={{ fontSize: "0.75rem" }}>
                  DONE
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{
                "&:hover": { backgroundColor: "#D5D9DF" },
                height: "25px",
                marginLeft: "2px",
              }}
            >
              <MoreHorizIcon />
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SprintTaskRow;

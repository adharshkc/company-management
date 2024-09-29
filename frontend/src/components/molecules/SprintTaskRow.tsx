import { Typography } from "@components/atoms/typography/Typography";
import {
  Box,
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
import { updateIssueName, updateIssueStatus } from "../../services/EmployeeApi";
import { Snackbar, SnackbarCloseReason } from "@mui/material";
import { Alert } from "@mui/material";
import { Column, Issue } from "../../types/types";

type SprintTaskRowProps = {
  issue: Issue;
  sprintColumns:Column[];
  fetchIssue: () => void;
};

const SprintTaskRow: React.FC<SprintTaskRowProps> = ({
  issue,
  sprintColumns,
  fetchIssue,
}) => {
  const [status, setStatus] = useState(issue?.status);
  console.log(sprintColumns)
  const [sprintEdit, setSprintEdit] = useState<boolean>(false);
  const { setIsModalIssue, setIssues } = useIssueStore();
  const [errorSnack, setErrorSnack] = useState<boolean>(false);
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
      assignee_id: issue.assignee_id,
      description: issue.description,
      sprint_id: issue.sprint_id,
      columns: sprintColumns,
      sprint: { name: issue.sprint.name },
      assignee: { name: issue?.assignee?.name },
    });
  };
  const handleUpdate = async (issueStatus: string) => {
    console.log(issueStatus);
    try {
      await updateIssueStatus(issueStatus, issue.issue_id);
    } catch (error) {
      console.log(error);
      setErrorSnack(true);
    }
  };

  const handleUpdateName = async (issueName: string) => {
    try {
      const response = await updateIssueName(issueName, issue?.issue_id);
      if (response.status == 200) {
        setSprintEdit(false);
        fetchIssue();
      }
    } catch (error) {
      console.log(error);
      setErrorSnack(true);
    }
  };
  const handleChange = (e: SelectChangeEvent<string>) => {
    console.log(e.target.value);
    setStatus(e.target.value);
    handleUpdate(e.target.value);
  };

  const editClick = () => {
    console.log("hdfhas");
    setSprintEdit(true);
  };
  if (!issue) {
    return <h3>loading</h3>;
  }
  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setErrorSnack(false);
  };
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
      <Snackbar
        open={errorSnack}
        onClose={handleSnackClose}
        autoHideDuration={3000}
      >
        <Alert
          // onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Something went wrong!
        </Alert>
      </Snackbar>

      {sprintEdit ? (
        <Box ref={editRef}>
          <EmptySprintRow
            issueHandler={handleUpdateName}
            issueName={issue.name}
          />
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
            cursor: "pointer",
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
              onClick={(event) => {
                event.stopPropagation();
                editClick();
              }}
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
                onClick={(event) => event.stopPropagation()}
                onChange={(event) => {
                  event.stopPropagation();
                  handleChange(event);
                }}
                sx={{ fontSize: "0.75rem", padding: "4px" }}
                disableUnderline
              >
                {sprintColumns.map((column) => (
                  <MenuItem
                    key={column.column_id}
                    value={column.name}
                    sx={{ fontSize: "0.75rem" }}
                  >
                    {column.name.toUpperCase()}
                  </MenuItem>
                ))}
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

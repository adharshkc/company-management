import CloseIcon from "@mui/icons-material/Close";
import style from "../../styles/issueDetail.module.scss";
import { Snackbar, SnackbarCloseReason, TextField } from "@mui/material";
import { useState } from "react";
import { useIssueStore } from "../../../zustand/IssueStore";
import CallToActionOutlinedIcon from "@mui/icons-material/CallToActionOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import {
  updateIssueDescription,
  updateIssueName,
} from "../../../services/EmployeeApi";

const IssueDetails = () => {
  const { issues, setIsModalIssue, setFetchIssue } = useIssueStore();
  const [input, setInput] = useState(issues.name);
  const [description, setDescription] = useState<string | undefined>(
    issues?.description
  );
  const [descError, setDescError] = useState<boolean>(false)
  const [descButton, setDescButton] = useState<boolean>(false)
  // const [selectInput, setSelectInput] = useState(issues.status);
  const handleIssue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    updateIssueName(input, issues.issue_id);
  };
  const handleClose = () => {
    setFetchIssue(true);
    setIsModalIssue(false);
  };

  const handleDescription = () => {
    if(!description?.trim())return setDescError(true)
    updateIssueDescription(description, issues.issue_id);
  setDescButton(false)
  };
  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setDescError(false);
  };

  // const handleSelectChange =async (e: SelectChangeEvent<string>) => {
  //   try {
  //     const response = await updateIssueStatus(e.target.value, issues.issue_id)
  //    if(response.status==200){
  //      setSelectInput(e.target.value);
  //    }
  // } catch (error) {
  //   console.log(error)
  // }

  // };
  return (
    <div style={{ width: "500px" }}>
      <div className={style.header}>
        <div className={style.headerIcon}>
          <CallToActionOutlinedIcon />
          <form onSubmit={handleIssue}>
            <TextField
              // fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              // variant="outlined"
              sx={{
                marginLeft: 2,
                "&:hover": { backgroundColor: "#F1F2F4" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input": {
                  border: "none",
                  padding: "0 0",
                  fontSize: "16px",
                  fontWeight: "600",
                },
              }}
            />
          </form>
        </div>
        <div>
          <CloseIcon className={style.closeIcon} onClick={handleClose} />
        </div>
      </div>
      <div className={style.taskCard}>
        <div className={style.taskDetails}>
          <div className={style.detailRow}>
            <span className={style.detailLabel}>Assignee</span>

            {issues.assignee_id ? (
              <span className={style.detailValueAssignee}>
                <span className={style.avatar}>AK</span>
                {issues.assignee_id}
              </span>
            ) : (
              <span className={style.detailValueAssignee}>
                {/* <span className={style.avatar}>AK</span> */}
                Unassigned
              </span>
            )}
          </div>

          <div className={style.detailRow}>
            <span className={style.detailLabel}>Status</span>
            <span className={style.detailValue}>{issues.status}</span>
          </div>
          <div className={style.detailRow}>
            <span className={style.detailLabel}>Sprint</span>
            <span className={style.detailValue}>{issues.sprint?.name}</span>
          </div>
          {/* <div className={style.detailRow}>
            <span className={style.detailLabel}>Team</span>
            <span className={style.detailValue}>None</span>
          </div> */}
        </div>
      </div>
      <div className={style.Descriptionheader}>
        <div className={style.sideIcon}>
          <NotesOutlinedIcon />
        </div>
        <div className={style.description}>
          <span className={style.descriptionDetailLabel}>Description</span>
          <div  onClick={()=>setDescButton(true)}>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              placeholder="Add a more detailed Description..."
              sx={{
                marginTop: 1,
                "& .MuiInputBase-input": {
                  border: "none",
                  padding: "none",
                  fontSize: "14px",
                },
                "& .MuiInputBase-root": {
                  padding: "10px",
                },
              }}
            />
          </div>
          {descButton&&
          <div className={style.descriptionButton}>
            <button className={style.saveButton} onClick={handleDescription}>save</button>
            <button className={style.cancelButton} onClick={()=>setDescButton(false)}>cancel</button>
          </div>
          }
        </div>
      </div>
      <div className={style.activityHeader}>
        <div className={style.act}>
          <div className={style.sideIcon}>
            <TimelineOutlinedIcon fontSize="medium" />
          </div>
          <div className={style.description}>
            <span className={style.descriptionDetailLabel}>Activity</span>
          </div>
        </div>
        <div className={style.actButton}>
          <button>Show Details</button>
        </div>
      </div>
      <div className={style.commentHeader}>
        <div className={style.avatars}>AC</div>
        <div className={style.commentBox}>
          <input
            type="text"
            placeholder="Write a comment..."
            className={style.commentInput}
          />
          <IosShareOutlinedIcon
            color="secondary"
            sx={{
              cursor: "pointer",
              "& .hover": { backgroundColor: "yellow" },
            }}
          />
        </div>
      </div>
      <div className={style.commentHeader}>
        <div className={style.avatars}>AC</div>
        <div>
          <h4 className={style.commentName}>
            Adharsh <span>4 sept 2026</span>
          </h4>
          <div className={style.commentNameBox}>
            <h3 className={style.commentBody}>hello</h3>
          </div>
        </div>
      </div>
      <div className={style.commentHeader}>
        <div className={style.avatars}>AC</div>
        <div>
          <h4 className={style.commentName}>
            Adharsh <span>4 sept 2026</span>
          </h4>
          <div className={style.commentNameBox}>
            <h3 className={style.commentBody}>hello</h3>
          </div>
        </div>
      </div>
      <Snackbar
        open={descError}
        onClose={handleSnackClose}
        autoHideDuration={3000}
        message={"Please add the description"}
      />
    </div>
  );
};

export default IssueDetails;

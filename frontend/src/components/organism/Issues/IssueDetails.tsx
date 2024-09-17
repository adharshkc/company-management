import CloseIcon from "@mui/icons-material/Close";
import style from "../../styles/issueDetail.module.scss";
import {
  Box,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useIssueStore } from "../../../zustand/IssueStore";
import CallToActionOutlinedIcon from "@mui/icons-material/CallToActionOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
// import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const IssueDetails = () => {
  const { issues, setIsModalIssue } = useIssueStore();

  console.log(issues);
  const [input, setInput] = useState(issues.name);
  const [selectInput, setSelectInput] = useState("Todo");
  const handleIssue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };
  const handleClose = () => {
    setIsModalIssue(false);
  };
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setSelectInput(e.target.value);
  };
  return (
    <div>
      <div className={style.header}>
        <div className={style.headerIcon}>
          <CallToActionOutlinedIcon />
        </div>
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
                padding: "4px 0",
                fontSize: "16px",
                fontWeight: "600",
              },
            }}
          />
        </form>
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
            <span className={style.detailLabel}>Team</span>
            <span className={style.detailValue}>None</span>
          </div>
          <div className={style.detailRow}>
            <span className={style.detailLabel}>Status</span>
            <FormControl
              className={style.detailValue}
              variant="standard"
              size="small"
              style={{}}
            >
              <Select
                value={selectInput}
                onChange={handleSelectChange}
                sx={{ fontSize: "0.75rem", width: "60%" }}
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
          </div>
          <div className={style.detailRow}>
            <span className={style.detailLabel}>Sprint</span>
            <span className={style.detailValue}>SP Sprint asdf</span>
          </div>
        </div>
      </div>
      <div className={style.Descriptionheader}>
        <div className={style.sideIcon}>
          <NotesOutlinedIcon />
        </div>
        <div className={style.description}>
          <span className={style.descriptionDetailLabel}>Description</span>
          <TextField
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
      </div>
      <div className={style.activityHeader}>
        <div className={style.sideIcon}>
          <TimelineOutlinedIcon fontSize="medium"/>
        </div>
        <div className={style.description}>
          <span className={style.descriptionDetailLabel}>Activity</span>
        </div>
      </div>
      <div className={style.commentHeader}>

  <div className={style.avatars}>AC</div>
      <div className={style.commentBox}>
  <input type="text" placeholder="Write a comment..." className={style.commentInput}/>
  <IosShareOutlinedIcon/>
      </div>
</div>
    </div>
  );
};

export default IssueDetails;

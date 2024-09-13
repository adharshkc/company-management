import CloseIcon from "@mui/icons-material/Close";
import style from "../../styles/issueDetail.module.scss";
import { Box, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useIssueStore } from "../../../zustand/IssueStore";

const IssueDetails = () => {
  const {issues, setIsModalIssue} = useIssueStore()
  console.log(issues)
  const [input, setInput] = useState(issues.name)
  const handleIssue = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(input)
  }
  const handleClose = ()=>{
setIsModalIssue(false)
  }
  return (
    <div>
      <div className={style.header}>
        <CloseIcon onClick={handleClose}/>
      </div>
      <form onSubmit={handleIssue}>

      <TextField
            fullWidth
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            // variant="outlined"
            sx={{
              margin:2,
              "&:hover":{backgroundColor:"#F1F2F4"},
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
                padding: "4px 8px",
                fontSize: "16px",
              },
            }}
            />
            </form>
      <div className={style.taskCard}>
        <div className={style.taskDetails}>
        <div className={style.detailRow}>
            <span className={style.detailLabel}>Assignee</span>
              {issues.assignee_id?
            <span className={style.detailValue}>
                <span className={style.avatar}>AK</span>
                {issues.assignee_id}
                </span>:
            <span className={style.detailValue}>
                {/* <span className={style.avatar}>AK</span> */}
               No assignee
                </span>
              }
        </div>
        <div className={style.detailRow}>
            <span className={style.detailLabel}>Labels</span>
            <span className={style.detailValue}>None</span>
        </div>
        <div className={style.detailRow}>
            <span className={style.detailLabel}>Parent</span>
            <span className={style.detailValue}>None</span>
        </div>
        <div className={style.detailRow}>
            <span className={style.detailLabel}>Team</span>
            <span className={style.detailValue}>None</span>
        </div>
        <div className={style.detailRow}>
            <span className={style.detailLabel}>Sprint</span>
            <span className={style.detailValue}>
                <a href="#" className={style.sprint}>SP Sprint asdf</a>
            </span>
        </div>
    </div>
      </div>
    </div>
  );
};

export default IssueDetails;

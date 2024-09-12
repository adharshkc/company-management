import CloseIcon from "@mui/icons-material/Close";
import style from "../../styles/issueDetail.module.scss";
import { Box, IconButton, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import {
  CalendarIcon,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const IssueDetails = () => {
  const [editNameIcon, setEditNameIcon] = useState<boolean>(false);
  return (
    <div>
      <div className={style.header}>
        <CloseIcon />
      </div>
      <div className={style.taskCard}>
        <div className={style.taskTitle}>tomdahdfgdf</div>
        <div className={style.taskDetails}>
        <div className={style.detailRow}>
            <span className={style.detailLabel}>Assignee</span>
            <span className={style.detailValue}>
                <span className={style.avatar}>AK</span>
                Adharsh K C
            </span>
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

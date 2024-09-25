/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  Backdrop,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { theme } from "../../../theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@components/atoms/button/Button";

type StartSprintProps = {
  openModal: (isOpen: boolean) => void;
  sprintName: string;
  sprintStartDate: Date | undefined | Dayjs | string;
  sprintEndDate: Dayjs | Date | null | undefined | string;
  updateSprint: (
    name: string,
    startDate: Date | undefined,
    endDate: Date | null | undefined
  ) => void;
  updateSprintStatus: () => void;
};

const StartSprint: React.FC<StartSprintProps> = ({
  openModal,
  sprintName,
  sprintStartDate,
  sprintEndDate,
  updateSprint,
  updateSprintStatus,
}) => {
  const [name, setName] = useState(sprintName);
  const [endDate, setEndDate] = useState<any>(dayjs(sprintEndDate));
  const [startDate, setStartDate] = useState<any>(dayjs(sprintStartDate));
  const [sDate, setSDate] = useState<any>();
  const [eDate, setEDate] = useState<any>();
  const [backDrop, setBackdrop] = useState<boolean>(false);
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");
  const handleClick = async (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    try {
      if (!name.trim() || name.length < 3 || name.length > 30) {
        toast.error("Please enter a valid name");
        return;
      }
      if (startDate.$d == "Invalid Date") {
        return toast.error("please enter the start date");
      }
      if (endDate.$d == "Invalid Date") {
        return toast.error("please enter the end date");
      }
      setBackdrop(true);
      updateSprint(name, sDate, eDate);
      updateSprintStatus();
      setBackdrop(false);
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const handleStartDate = (value: Dayjs | null) => {
    setStartDateError("");
    if (value === null) {
      setStartDateError("Date is required");
      setStartDate(null);
      return;
    }
    const selectedDate = value.toDate();
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate < currentDate) {
      setStartDateError("Select a future date");
    } else {
      setSDate(selectedDate);
      setStartDate(value);
      if (endDate && endDate.toDate() < selectedDate) {
        setEndDateError("End date should not be before start date");
      } else {
        setEndDateError("");
      }
    }
  };
  const handleEndDate = (value: Dayjs | null) => {
    setEndDateError("");
    if (value === null) {
      setEndDateError("Date is required");
      setEndDate(null);
      return;
    }
    const selectedEndDate = value.toDate();
    if (startDate && selectedEndDate < startDate.toDate()) {
      setEndDateError("End date should not be before start date");
    } else {
      setEDate(value);
      setEndDate(value);
    }
  };
  const handleClose = () => openModal(false);
  return (
    <div>
      <Toaster position="top-right" />
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle color="#28231d">Start Sprint</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Name*"
            type="text"
            sx={{
              width: "300px",
              marginBottom: "26px",
              "& .MuiInputBase-input": {
                color: "#000",
              },
              "& .MuiInputLabel-root": {
                color: "#000",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#000",
              },
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              sx={{
                width: "300px",
                "& .MuiInputBase-input": {
                  color: "#000",
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#000",
                },
              }}
              value={startDate}
              onChange={handleStartDate}
              slotProps={{
                textField: {
                  error: !!startDateError,
                  helperText: startDateError,
                },
              }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              sx={{
                width: "300px",
                marginTop: "26px",
                "& .MuiInputBase-input": {
                  color: "#000",
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#000",
                },
              }}
              value={endDate}
              onChange={handleEndDate}
              slotProps={{
                textField: {
                  error: !!endDateError,
                  helperText: endDateError,
                },
              }}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start", margin: 3 }}>
          <Button
            sx={{ backgroundColor: theme.palette.primary.dark, color: "white" }}
            onClick={(e) => handleClick(e)}
          >
            Start
          </Button>
          <Button
            sx={{
              color: "black",
              "&:hover": {
                color: "black",
                backgroundColor: "#f1f2f4",
              },
            }}
            onClick={() => openModal(false)}
          >
            Cancel
          </Button>
        </DialogActions>
        <Backdrop onClick={handleClose} open={backDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Dialog>
    </div>
  );
};

export default StartSprint;

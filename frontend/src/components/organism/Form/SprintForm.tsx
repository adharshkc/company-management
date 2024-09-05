import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import {
  Backdrop,
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { emailPattern, phonePattern } from "../../../constants/constants";
import { EmployeeDetail } from "../../../types/types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";

type AddEmployeeProps = {
  openModal: (isOpen: boolean) => void;
  sprintName:string
  addEmployee: ({
    name,
    phone,
    email,
    startDate,
    role,
  }: EmployeeDetail) => void;
};

const SprintForm: React.FC<AddEmployeeProps> = ({
    sprintName,
  addEmployee,
  openModal,
}) => {
  const [name, setName] = useState(sprintName);
  const [date, setDate] = useState<Dayjs>();
  const [joiningDate, setJoiningDate] = useState<Date>();
  const [backDrop, setBackdrop] = useState<boolean>(false);
  const [joiningDateError, setJoiningDateError] = useState("");
  const [team, setTeam] = useState('')
  const [role, setRole] = useState('')

  const handleClick = async (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    try {
      if (!name.trim() || name.length < 3) {
        toast.error("Please enter a valid name");
        return;
      }
      
      setBackdrop(true);
      addEmployee({
        name,
        role, 
        team,
        joiningDate,
      });
      setBackdrop(false)
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJoiningDateError("");
    const selectedDate = event.target.value
      ? new Date(event.target.value)
      : null;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate === null) return setJoiningDateError("date is required");
    if (selectedDate < currentDate)
      return setJoiningDateError("Select a future date");
    setJoiningDate(selectedDate);
    setDate(event.target.value);
  };
  const handleClose = () => openModal(false);
  return (
    <div>
      <Toaster position="top-right" />
      <Dialog open={true} onClose={handleClose}>
      <DialogTitle color="#28231d">Edit Sprint: {sprintName}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Name*"
          type="text"
        sx={{width: '300px',  
            marginBottom: '26px',
            "& .MuiInputBase-input": {
                color: "#000" // Text color
              },
              "& .MuiInputLabel-root": {
                color: "#000", // Label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000", // Label color on focus
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#000" // Bottom border color on focus
              }
            }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            sx={{width: '300px',
                "& .MuiInputBase-input": {
                    color: "#000" 
                  },
                  "& .MuiInputLabel-root": {
                    color: "#000", 
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000", 
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#000" 
                  }}}
            value={date}
            // onChange={(newDate) => setDate(newDate)}
            // renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            sx={{width: '300px',
                marginTop: '26px',
                "& .MuiInputBase-input": {
                    color: "#000" 
                  },
                  "& .MuiInputLabel-root": {
                    color: "#000", 
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000", 
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#000" 
                  }}}
            value={date}
            // onChange={(newDate) => setDate(newDate)}
            // renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
          />
        </LocalizationProvider>
        
      </DialogContent>
      <DialogActions
          sx={{ justifyContent: "flex-end",margin:3}}
        >
          <Button
            sx={{ backgroundColor: theme.palette.primary.dark, color: "white" }}
            onClick={(e) => handleClick(e)}
          >
            Add
          </Button>
          <Button
            sx={{
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
            onClick={() => openModal(false)}
          >
            Cancel
          </Button>
        </DialogActions>
    </Dialog>
    </div>
  );
};

export default SprintForm;

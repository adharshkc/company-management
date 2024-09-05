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
} from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { emailPattern, phonePattern } from "../../../constants/constants";
import { EmployeeDetail } from "../../../types/types";

type AddEmployeeProps = {
  openModal: (isOpen: boolean) => void;
  addEmployee: ({
    name,
    phone,
    email,
    startDate,
    role,
  }: EmployeeDetail) => void;
};

const AddEmployee: React.FC<AddEmployeeProps> = ({
  addEmployee,
  openModal,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
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
      if (!email.trim() || !emailPattern.test(email)) {
        toast.error("Please enter a valid email");
        return;
      }
      if (!phone.trim() || !phonePattern.test(phone)) {
        toast.error("Please enter a valid phone number");
        return;
      }
      if(!role) return toast.error("Please select a role..")
      if(!team) return toast.error("Please select a team..")
      if (!joiningDate) {
        toast.error("Please enter a valid date");
        return;
      }
      
      setBackdrop(true);
      addEmployee({
        name,
        email,
        phone,
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
  const handleTeam = (e:SelectChangeEvent<string>)=> setTeam(e.target.value)
  const handleRole = (e:SelectChangeEvent<string>)=> setRole(e.target.value)
  const handleClose = () => setBackdrop(false);
  return (
    <div>
      <Toaster position="top-right" />
      <Dialog
        open={true}
        PaperProps={{
          component: "form",
        }}
        sx={{ marginBottom: 2 }}
      >
        <DialogTitle marginTop={3}>Add New Employee</DialogTitle>

        <DialogContent sx={{}}>
          <TextField
            id="filled-basic"
            required
            label="Name"
            color="info"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            sx={{
              "& .MuiFilledInput-root": {
                color: "#000",
                // marginTop: 4,
                height: "56px",
                width: "100%",
                backgroundColor: "#f2f2f2",
                borderRadius: "8px",
              },
            }}
          />
          <TextField
            id="filled-basic"
            required
            label="Email"
            color="info"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            sx={{
              "& .MuiFilledInput-root": {
                color: "#000",
                marginTop: 4,
                height: "56px",
                width: "100%",
                backgroundColor: "#f2f2f2",
                borderRadius: "8px",
              },
              marginTop: 2,
            }}
          />
          <TextField
            id="filled-basic"
            required
            label="phone"
            color="info"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="standard"
            sx={{
              "& .MuiFilledInput-root": {
                color: "#000",
                marginTop: 4,
                height: "56px",
                width: "100%",
                backgroundColor: "#f2f2f2",
                borderRadius: "8px",
              },
              marginTop: 2,
            }}
          />
          <FormControl
            // error={PriorityError}
            variant="standard"
            sx={{ marginTop: 2, width: "60%" }}
          >
            <InputLabel color="info" id="project-type-label">
              Role *
            </InputLabel>
            <Select
              labelId="project-type-label"
              id="project-type-select"
              // error={PriorityError}
              color="info"
              value={role}
              onChange={handleRole}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#f2f2f2",
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="High">Frontend</MenuItem>
              <MenuItem value="Team Lead">Team lead</MenuItem>
              <MenuItem value="Low">Full Stack</MenuItem>
            </Select>
            {/* {PriorityError && (
                <FormHelperText>select a severity</FormHelperText>
              )} */}
          </FormControl>
          <FormControl
            // error={PriorityError}
            variant="standard"
            sx={{ marginTop: 2, width: "60%" }}
          >
            <InputLabel color="info" id="project-type-label">
              Team *
            </InputLabel>
            <Select
              labelId="project-type-label"
              id="project-type-select"
              // error={PriorityError}
              color="info"
              value={team}
              onChange={handleTeam}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#f2f2f2",
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">Team 2</MenuItem>
              <MenuItem value="3">Team 3</MenuItem>
            </Select>
            {/* {PriorityError && (
                <FormHelperText>select a severity</FormHelperText>
              )} */}
          </FormControl>
          <Box marginTop="15px">
            <InputLabel color="info" id="project-type-label">
              Start date *
            </InputLabel>
            <TextField
              id="filled-basic "
              label=""
              required
              error={!!joiningDateError}
              helperText={joiningDateError ? joiningDateError : ""}
              type="date"
              color="info"
              value={date}
              onChange={handleDate}
              variant="standard"
              sx={{
                "& .MuiFilledInput-root": {
                  color: "#000",
                  height: "56px",
                  fontWeight: 200,
                  width: "100%",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "8px",
                },
                // marginTop: 2,
                width: "60%",
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions
          sx={{ justifyContent: "flex-start", marginLeft: 2, marginBottom: 3 }}
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
        <Backdrop onClick={handleClose} open={backDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Dialog>
    </div>
  );
};

export default AddEmployee;

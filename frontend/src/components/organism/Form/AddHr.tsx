import { Button } from "@components/atoms/button/Button";
import { Input } from "@components/atoms/input/Input";
import {theme} from "../../../theme"
import {
    Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddHr = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("")
  const [startDate, setStartDate] = useState<Date|null>()
  const [startDateError, setStartDateError] = useState('')
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateError("");
    const selectedDate = event.target.value
    ? new Date(event.target.value)
    : null;
    const currentDate = new Date();
    console.log(selectedDate);
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate === null) return setStartDateError("date is required");
    if (selectedDate < currentDate)
      return setStartDateError("Select a future date");
    setStartDate(selectedDate);
    setDate(event.target.value);
  };
  return (
    <div>
      <Dialog
        open={true}
        // onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
        sx={{marginBottom:2}}
      >
        <DialogTitle>Add HR</DialogTitle>

        <DialogContent sx={{}}>

           
          <TextField
            id="filled-basic"
            required
            label="Name"
            //   error={!!startDateError}
            //   helperText={startDateError ? startDateError : ""}
            color="info"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            label="Email"
            //   error={!!startDateError}
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
            //   error={!!startDateError}
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
         <TextField
              id="filled-basic"
              label="Start Date"
            //   error={!!startDateError}
            //   helperText={startDateError ? startDateError : ""}
              type="date"
              color="info"
              value={date}
              onChange={handleDate}
              variant="filled"
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
                width: "100%",
              }}
            />
           
        </DialogContent>
        <DialogActions sx={{justifyContent:'flex-start', marginLeft:2}}>
          <Button sx={{ backgroundColor: theme.palette.primary.dark, color:'white'}}>Add</Button>
          <Button sx={{"&:hover":{
            color: 'black',
            backgroundColor:'white'
          }}}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddHr;

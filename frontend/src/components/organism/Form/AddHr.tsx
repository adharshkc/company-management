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
  TextField,
} from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { emailPattern, phonePattern } from "../../../constants/constants";
import { HrDetails } from "../../../types/types";

type AddHrProps = {
  openModal:(isOpen:boolean)=>void
  addHr:({name, phone,email, startDate}:HrDetails)=>void
}

const AddHr:React.FC<AddHrProps> = ({ addHr, openModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [backDrop, setBackdrop] = useState<boolean>(false)
  const [startDateError, setStartDateError] = useState("");

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
      if (
        !phone.trim() ||
        // phone.length < 8 ||
        // phone.length > 12 ||
        !phonePattern.test(phone)
      ) {
        toast.error("Please enter a valid phone number");
        return;
      }
      if(!startDate){
        toast.error("Please enter a valid date")
        return 
      }
      setBackdrop(true)
      const hr = await addHr({
        name,
        email,
        phone,
        startDate}
      );
      // if(hr){
        setBackdrop(false)
      // }
    } catch (error) {
      toast.error("something went wrong");
      // openModal(false);
      setBackdrop(false)
      console.log(error)
    }
  };

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateError("");
    const selectedDate = event.target.value
      ? new Date(event.target.value)
      : null;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate === null) return setStartDateError("date is required");
    if (selectedDate < currentDate)
      return setStartDateError("Select a future date");
    setStartDate(selectedDate);
    setDate(event.target.value);
  };
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
        <DialogTitle marginTop={3}>Add New HR</DialogTitle>

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
          <Box>
            <TextField
              id="filled-basic "
              label="Start Date"
              required
              error={!!startDateError}
              helperText={startDateError ? startDateError : ""}
              type="date"
              color="info"
              value={date}
              onChange={handleDate}
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  color: "#000",
                  marginTop: 5,
                  height: "56px",
                  width: "100%",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "8px",
                },
                marginTop: 2,
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

export default AddHr;

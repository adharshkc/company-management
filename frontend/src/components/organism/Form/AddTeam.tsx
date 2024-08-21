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

type AddHrProps = {
  openModal: (isOpen: boolean) => void;
  addTeam: ( name:string) => void;
};

const AddTeam: React.FC<AddHrProps> = ({ addTeam, openModal }) => {
  const [name, setName] = useState("");
  const [backDrop, setBackdrop] = useState<boolean>(false);

  const handleClick = async (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    try {
      if (!name.trim() || name.length < 3) {
        toast.error("Please enter a valid name");
        return;
      }
      setBackdrop(true);
      addTeam(name)
      setBackdrop(false);
    } catch (error) {
      toast.error("something went wrong");
      setBackdrop(false);
      console.log(error);
    }
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
        <DialogTitle marginTop={3}>Add New Team</DialogTitle>
        <DialogContent>
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
                height: "56px",
                width: "100%",
                backgroundColor: "#f2f2f2",
                borderRadius: "8px",
              },
            }}
          />
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

export default AddTeam;

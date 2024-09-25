import { Button } from "@components/atoms/button/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { theme } from "../../../theme";

type ConflictSprintProps = {
  openModal: (bool: boolean) => void;
};

const ConflictSprint: React.FC<ConflictSprintProps> = ({ openModal }) => {
  const handleClose = () => openModal(false);
  const handleClick = () => {openModal(false)};
  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle color="#28231d">Warning...</DialogTitle>
      <DialogContent sx={{marginBottom:0}}>
         You have 1 sprint running..<br/><br/>
          Complete the sprint to start a new sprint
      </DialogContent>
      <DialogActions sx={{ justifyContent: "flex-end", marginTop:0, margin: 2 }}>
        <Button
          sx={{ backgroundColor: theme.palette.primary.dark, color: "white" }}
          onClick={handleClick}
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConflictSprint;

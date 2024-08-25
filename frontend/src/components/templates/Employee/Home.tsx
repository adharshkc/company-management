import { Button } from "@components/atoms/button/Button";
import style from "../../styles/EmployeeHomeTemplate.module.scss";
import { theme } from "../../../theme";
import { Dialog } from "@mui/material";
import { useState } from "react";
import ClockModal from "@components/organism/Clock/ClockModal";
import { useDateAndTime } from "../../../hooks/useDateAndTime";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  useDateAndTime()
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={style.bodyPart}>
      <div className={style.header}>
        <Button
          sx={{
            backgroundColor: theme.palette.primary.dark,
            color: "white",
            marginRight: 4,
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
          onClick={() => setOpen(true)}
        >
          Clock In
        </Button>
      </div>
      <Dialog sx={{ margin: 1 }} open={open}>
        <ClockModal handleModal={handleClose} />
      </Dialog>
    </div>
  );
};

export default Home;

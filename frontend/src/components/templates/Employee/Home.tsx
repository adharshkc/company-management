import { Button } from "@components/atoms/button/Button";
import style from "../../styles/EmployeeHomeTemplate.module.scss";
import { theme } from "../../../theme";
import { Dialog, Typography } from "@mui/material";
import { useState } from "react";
import ClockModal from "@components/organism/Clock/ClockModal";
import { useDayAndWeek } from "../../../hooks/useDayAndWeek";
import HomeTask from "@components/organism/Task/HomeTask";

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { dayDate, timeOfDay } = useDayAndWeek()

  console.log(dayDate)
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
      <div className={style.time}>
        <Typography variant="body1" >{dayDate}</Typography>
        <Typography variant="h4">Good {timeOfDay}, Adharsh</Typography>

      </div>
      <div><HomeTask /></div>
      <Dialog sx={{ margin: 1 }} open={open}>
        <ClockModal handleModal={handleClose} />
      </Dialog>
    </div>
  );
};

export default Home;

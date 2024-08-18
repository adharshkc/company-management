import { Button } from "@components/atoms/button/Button";
import { Link } from "react-router-dom";
import { theme } from "../../../theme";
import style from "../../styles/hrEmployeeTemplate.module.scss";
import { Box } from "@mui/material";
import { Typography } from "@components/atoms/typography/Typography";

const EmployeeTemplate = () => {
  return (
    <div className={style.bodyPart}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="body1" className={style.heading}>
          <span className={style.heading1}>Dashboard </span>
          <span className="heading2">/ Project</span>{" "}
        </Typography>
        <Link to={"/admin/projects/add"}>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              marginRight: 4,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Add Employee
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default EmployeeTemplate;

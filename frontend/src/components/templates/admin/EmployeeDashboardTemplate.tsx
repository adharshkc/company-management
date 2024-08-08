import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import style from "../../styles/adminEmployeeTemplate.module.scss";
import { Typography } from "@components/atoms/typography/Typography";
import { Link } from "react-router-dom";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import { useState } from "react";
import AddHr from "@components/organism/Form/AddHr";

const EmployeeDashboardTemplate = () => { 
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
        <Box>
        </Box>
        {/* <Typography variant="h6">Employees</Typography> */}
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
            Add HR
          </Button>
        </Link>
      </Box>
      <Box>
       <AddHr/>
      </Box>
    </div>
  );
};

export default EmployeeDashboardTemplate;

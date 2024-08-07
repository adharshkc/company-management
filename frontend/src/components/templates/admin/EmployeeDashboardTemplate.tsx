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

const EmployeeDashboardTemplate = () => {
  const [value, setValue] = useState(0);
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
        <Box >
          {/* <List sx={{ listStyle: "none", display:'flex' }}>
            <ListItem sx={{"&:hover":{border:"2 solid black", backgroundColor:'secondary.main'}}}>
              <ListItemText primary="Employees"  />
            </ListItem>
            <ListItem sx={{  }}>
              <ListItemText primary="Teams" />
            </ListItem>
          </List> */}
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
        {/* {projects.length===0? <h4 style={{textAlign:'center', marginTop:'10px'}}>No projects available</h4>:

      <Table headers={headers} body={projects} />
} */}
      </Box>
    </div>
  );
};

export default EmployeeDashboardTemplate;

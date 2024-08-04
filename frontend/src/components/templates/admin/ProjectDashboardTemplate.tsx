import { Box, CircularProgress, Typography } from "@mui/material";
import style from "../../../components/styles/projectDashboardTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Table from "@components/organism/Table/Table";
import { Link } from "react-router-dom";

const ProjectDashboardTemplate = () => {
  const headers = ["ID", "Name", "Lead", "URL", "Progress"];
  const data = [
    {
      id: 1,
      name: "E-Commerce",
      email: "John Doe",
      url: "http://localhost:3000",
      progress: (
        <CircularProgress variant="determinate" sx={{color:"secondary.dark"}} value={25} />
      ),
    },
    {
      id: 2,
      name: "Social Media",
      email: "Jane",
      url: "http://localhost:3000",
      progress: (
        <CircularProgress variant="determinate"  sx={{color:"secondary.dark"}} value={90} />
      ),
    },
  ];

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
        <Typography variant="h6">Projects</Typography>
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
          Create Project
        </Button>
          </Link>
      </Box>
      <Box>
        <Table headers={headers} body={data} />
      </Box>
    </div>
  );
};

export default ProjectDashboardTemplate;

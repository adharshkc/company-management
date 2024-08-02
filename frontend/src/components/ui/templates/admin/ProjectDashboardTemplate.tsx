import { Box, CircularProgress, Typography } from "@mui/material";
import style from "../../../styles/projectDashboardTemplate.module.scss";
import { Button } from "@components/ui/atoms/button/Button";
import { theme } from "../../../../theme";
import Table from "@components/ui/organism/Table";

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
      </Box>
      <Box>
        <Table headers={headers} body={data} />
      </Box>
    </div>
  );
};

export default ProjectDashboardTemplate;

import { Box, Grid } from "@mui/material";
import style from "../../../styles/projectDashboardTemplate.module.scss";
import { Button } from "@components/ui/atoms/button/Button";
import { theme } from "../../../../theme";
import ProjectCard from "@components/ui/organism/ProjectCard";

const ProjectDashboardTemplate = () => {
  return (
    <div className={style.bodyPart}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        <Button
          sx={{
            backgroundColor:theme.palette.primary.dark,
            color:'white',
            marginRight: 4,
            "&:hover": {
              backgroundColor: "secondary.main",
            },
          }}
        >
          Create Project
        </Button>
      </Box>
      
    </div>
  );
};

export default ProjectDashboardTemplate;

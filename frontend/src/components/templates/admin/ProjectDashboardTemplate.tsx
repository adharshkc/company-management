import { Box, Typography } from "@mui/material";
import style from "../../../components/styles/projectDashboardTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import Table from "@components/organism/Table/Table";
import { Link } from "react-router-dom";
import { getAllProjects } from "../../../services/AdminApi";
import { useEffect, useState } from "react";

const ProjectDashboardTemplate = () => {
  const headers = [ "Name", "Team", "Priority", "Due Date"];
  const [projects, setProjects] = useState([])
  const [teams, setTeams] = useState([])
  
  const getProjects = async function(){
    const response = await getAllProjects()
    console.log(response)
    setProjects(response.data.projects)
  }
  const getTeams  = async function(){
    const response = await getAllTeams()
    setTeams(response.data.teams)
  }
  useEffect(()=>{
    getProjects()
    getTeams()
  }, [])

 
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
        {projects.length===0? <h4 style={{textAlign:'center', marginTop:'10px'}}>No projects available</h4>:
 
        <Table headers={headers} body={projects} />
}
      </Box>
    </div>
  );
};

export default ProjectDashboardTemplate;

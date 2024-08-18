import { Box } from "@mui/material";
import { Typography } from "../../atoms/typography/Typography";

const ProjectStatics = () => {
  return (
    <Box
      sx={{ width: "420px", border: " #bdbdbd 1px solid", marginTop:"20px", borderRadius: "5px" }}
    >
      <Typography sx={{padding:2, color:""}} variant="h6">Project Statistics</Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", padding: 3 }}>
        <Box sx={{ display: "flex"}}>
          <Typography>
            
            <Typography variant="h4">42</Typography> Total <br /> projects
          </Typography>
          <Box sx={{border: '1px solid #52595A',height: '85px', marginLeft: 4}}></Box>
        </Box>
        <Box sx={{ display: "flex"}}>
          <Typography>
            <Typography variant="h4">42</Typography>Ongoing <br /> projects
          </Typography>
          <Box sx={{border: '1px solid #52595A',height: '85px', marginLeft: 4}}></Box>
        </Box>
        <Box sx={{ display: "flex"}}>
          <Typography>
            <Typography variant="h4">42</Typography>Pending <br /> projects
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectStatics;

import { Typography } from "@components/atoms/typography/Typography";
import shimmerPNG from "../../../assets/shimmer.png"
import { Box } from "@mui/material";
type AddProjectShimmerProps={
    projectName: string
}

const AddProjectShimmer = ({projectName}:AddProjectShimmerProps) => {
  return (
    <Box>
      <Box margin={1} position={'relative'} sx={{display:'flex'}}>
      <Typography 
    variant="body1" 
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: '18px', 
      left: '75px',
    }}
  >
    {projectName}
  </Typography>
      <Typography 
    variant="body1" 
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: '80px', 
      left: '30px',
    }}
  >
    Todo
  </Typography>
      <Typography 
    variant="body1" 
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: '80px',  
      left: '300px', 
    }}
  >
    In Progress
  </Typography>
      <Typography 
    variant="body1" 
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: '80px',  
      left: '600px', 
    }}
  >
    Completed
  </Typography>
  <img 
    src={shimmerPNG} 
    alt="" 
    width={850} 
    style={{
    //   height: '100vh',
      position: 'relative',
      zIndex: 0,
    }} 
  />
      </Box>
    </Box>
  );
};

export default AddProjectShimmer;

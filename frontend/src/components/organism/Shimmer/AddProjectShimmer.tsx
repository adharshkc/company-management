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
      top: '18px',  // Adjust as needed
      left: '75px', // Adjust as needed
    }}
  >
    {projectName}
  </Typography>
      <Typography 
    variant="body1" 
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: '80px',  // Adjust as needed
      left: '30px', // Adjust as needed
    }}
  >
    Todo
  </Typography>
      <Typography 
    variant="body1" 
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: '80px',  // Adjust as needed
      left: '300px', // Adjust as needed
    }}
  >
    In Progress
  </Typography>
      <Typography 
    variant="body1" 
    sx={{
      position: 'absolute',
      zIndex: 1,
      top: '80px',  // Adjust as needed
      left: '600px', // Adjust as needed
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

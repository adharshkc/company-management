import { Button } from "@components/atoms/button/Button";
import SprintTaskRow from "@components/molecules/SprintTaskRow";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Typography } from "@mui/material";

const Sprint = () => {
  return (
    <>
    <Box sx={{
      backgroundColor:"#f7f8f9",
      borderRadius:"5px",
      padding:1
    }}>
      <Box sx={{display:"flex", justifyContent:"space-between"}}>

      <Box sx={{display:"flex", alignItems:"center", paddingX:3}}>
        <Typography variant="body1" sx={{fontSize:"16px", fontWeight:400}}>Sprint name</Typography>
        <Typography variant="body2" sx={{marginLeft:2, marginTop:"1px", }}>Date</Typography>
        <Typography variant="caption" sx={{marginX:1, marginTop:"2.5px"}}>(0 Issues)</Typography>
        
      </Box>
      <Box>
        <Button sx={{"&:hover":{backgroundColor:"#D5D9DF"}}}>Complete Sprint</Button>
        <Button sx={{"&:hover":{backgroundColor:"#D5D9DF"}, marginX:"2px"}}><MoreHorizIcon/></Button>
      </Box>
      </Box>
      <Box sx={{marginY:2, border: "1px solid #C9D4E4",borderRadius:"5px", borderBottom:0, backgroundColor:"white"}}>

      <SprintTaskRow /> 
      <SprintTaskRow /> 
      <SprintTaskRow /> 
      </Box>
    </Box>
    </>
  );
};

export default Sprint;

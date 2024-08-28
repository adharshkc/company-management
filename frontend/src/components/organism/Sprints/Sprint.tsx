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
      padding:1,
      marginTop:2
    }}>
      <Box sx={{display:"flex", justifyContent:"space-between"}}>

      <Box sx={{display:"flex", alignItems:"center", paddingX:3}}>
        <Typography variant="body1" sx={{fontSize:"16px", fontWeight:400, color:'#172B4D'}}>Sprint name</Typography>
        <Typography variant="body2" sx={{marginLeft:2, marginTop:"1px", color:"#172B4D" }}>Date</Typography>
        <Typography variant="caption" sx={{marginX:1, marginTop:"2.5px", color:"#172B4D"}}>(0 Issues)</Typography>
        
      </Box>
      <Box>
        <Button sx={{"&:hover":{backgroundColor:"#D5D9DF"}, color:'#172B4D'}}>Complete Sprint</Button>
        <Button sx={{"&:hover":{backgroundColor:"#D5D9DF"}, marginX:"2px"}}><MoreHorizIcon sx={{color:"#172B4D"}}/></Button>
      </Box>
      </Box>
      <Box sx={{marginY:2, border: "1px solid #C9D4E4",borderRadius:"5px", borderBottom:0, backgroundColor:"white"}}>

      <SprintTaskRow /> 
      <SprintTaskRow /> 
      <SprintTaskRow /> 
      </Box>
      <Box sx={{paddingX:3}}>
        <Typography sx={{color:"#172B4D", cursor:"pointer"}}> + Create Issue</Typography>
      </Box>
    </Box>
    </>
  );
};

export default Sprint;

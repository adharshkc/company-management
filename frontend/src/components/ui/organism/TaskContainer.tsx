import { Box } from "@mui/material"
import taskIcon from "../../../assets/icons/task icon.svg"
import { Typography } from "../atoms/typography/Typography"


const TaskContainer = () => {
  return (
    <Box sx={{marginTop: 5, display:'flex', justifyContent:'space-between'}}>
        <Box sx={{display: 'flex',border: " #bdbdbd 1px solid",borderRadius:'5px',padding:0.5}}>
            <img src={taskIcon} alt="" />
            <Typography sx={{marginLeft:1}} variant="body2">Total Tasks <br />112</Typography>
        </Box>
        <Box sx={{display: 'flex',border: " #bdbdbd 1px solid",borderRadius:'5px',padding:0.5}}>
            <img src={taskIcon} alt="" />
            <Typography sx={{marginLeft:1}} variant="body2">Done Tasks <br />112</Typography>
        </Box>
        <Box sx={{display: 'flex',border: " #bdbdbd 1px solid", borderRadius:'5px',padding:0.5}}>
            <img src={taskIcon} alt="" />
            <Typography sx={{marginLeft:1}} variant="body2">Pending Tasks <br />112</Typography>
        </Box>
       
    </Box>
  )
}

export default TaskContainer
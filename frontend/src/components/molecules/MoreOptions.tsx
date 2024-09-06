
import { Box, Typography } from "@mui/material"


type MoreOptionsProps={
  clickEdit:(bool:boolean)=>void
  clickDelete:(bool:boolean)=>void
}
const MoreOptions:React.FC<MoreOptionsProps> = ({clickEdit, clickDelete}) => {
    
  return (
    <Box sx={{backgroundColor:"white", padding:2, margin:1, zIndex:1}}>
        <Typography variant="body1" sx={{fontWeight:"300", cursor:"pointer",marginBottom:1}} onClick={()=>clickEdit(true)}>
            Edit Sprint
        </Typography>
        <Typography variant="body1" sx={{fontWeight:"300", cursor:"pointer"}}onClick={()=>clickDelete(true)}>
            Delete Sprint
        </Typography>
    </Box>
  )
}

export default MoreOptions
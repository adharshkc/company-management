
import { Menu, Typography } from "@mui/material"



const MoreOptions = ({open}) => {
    
  return (
    <Menu open={open} sx={{backgroundColor:"white", padding:2, margin:1, zIndex:1}}>
        <Typography variant="body1" sx={{fontWeight:"300"}}>
            Edit Sprint
        </Typography>
        <Typography variant="body1" sx={{fontWeight:"300"}}>
            Delete Sprint
        </Typography>
    </Menu>
  )
}

export default MoreOptions
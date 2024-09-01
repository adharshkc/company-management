import { Typography } from "@components/atoms/typography/Typography"
import { Box } from "@mui/material"

const NewSprintRow = () => {
  return (
    <Box
    sx={{
    //   borderBottom: "1px solid #C9D4E4",
    borderColor:"#D5D9DF",
      borderStyle:"dotted",
      height:"35px",
      paddingY: 1,
      margin:2,
      backgroundColor:"#f7f8f9",
      paddingX: 4,
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      "&:hover .edit-icon": {
        visibility: "visible",
      },
    }}
  >
    <Typography variant='caption' sx={{textAlign:'center'}}>Add your sprints here . . . </Typography>
  </Box>
  )
}

export default NewSprintRow
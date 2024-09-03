
import { Box, TextField } from '@mui/material'
const EmptySprintRow = () => {
  return (
    <>
       <Box
        sx={{
          borderBottom: "1px solid #388BFF",
          paddingY: 1,
          paddingX: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          "&:hover .edit-icon": {
            visibility: "visible",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", width:"100%" }}>
        <TextField
        fullWidth
        // variant="outlined"
        placeholder="What needs to be done?"
        sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none', 
              },
              '&:hover fieldset': {
                border: 'none', 
              },
              '&.Mui-focused fieldset': {
                border: 'none', 
              },
            },
            '& .MuiInputBase-input': {
              border: 'none', 
              padding: '4px 8px',
              fontSize: '16px',
            },
            '&::placeholder': {
              color: '#707C91',
              opacity: 1,
            },
          }}
        
      />
        </Box>
        <Box>
        </Box>
      </Box>
    </>
  )
}

export default EmptySprintRow
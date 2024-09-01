
import { Box, TextField } from '@mui/material'
const EmptySprintRow = () => {
  return (
    <>
       <Box
        sx={{
          borderBottom: "1px solid #C9D4E4",
          paddingY: 1,
          paddingX: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          "&:hover .edit-icon": {
            visibility: "visible",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
        fullWidth
        // variant="outlined"
        placeholder="What needs to be done?"
        sx={{
            border:"none",
          '& .MuiInputBase-input': {
            border:"none",
            padding: '4px 8px',
            fontSize: '16px',
          },
          '&::placeholder': {
            boder:"none",
            color: '#999',
            opacity: 1,
          },
        }}
      />
        </Box>
        <Box>
          {/* <FormControl variant="standard" size="small" style={{}}>
            <Select
              value={status}
              onChange={handleChange}
              sx={{ fontSize: "0.75rem", padding: "4px" }}
              disableUnderline
            >
              <MenuItem value="Todo" sx={{ fontSize: "0.75rem" }}>
                TODO
              </MenuItem>
              <MenuItem value="In Progress" sx={{ fontSize: "0.75rem" }}>
                IN PROGRESS
              </MenuItem>
              <MenuItem value="Done" sx={{ fontSize: "0.75rem" }}>
                DONE
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{
              "&:hover": { backgroundColor: "#D5D9DF" },
              height: "25px",
              marginLeft: "2px",
            }}
          >
            <MoreHorizIcon />
          </Button> */}
        </Box>
      </Box>
    </>
  )
}

export default EmptySprintRow
import { Box, TextField } from "@mui/material";
import { useState } from "react";
const EmptySprintRow = () => {
  const [input, setInput] = useState<string>("")
  const handleIssue =async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const response = await createIssue(input)
  }
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #388BFF",
          paddingY: 1,
          paddingX: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&:hover .edit-icon": {
            visibility: "visible",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <form onSubmit={handleIssue}>

          <TextField
            fullWidth
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            // variant="outlined"
            placeholder="What needs to be done?"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-input": {
                border: "none",
                padding: "4px 8px",
                fontSize: "16px",
              },
              "&::placeholder": {
                color: "#707C91",
                opacity: 1,
              },
            }}
            />
            </form>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default EmptySprintRow;

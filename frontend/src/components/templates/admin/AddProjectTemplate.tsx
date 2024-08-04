import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@components/atoms/typography/Typography";
import { useState } from "react";
import { Button } from "@components/atoms/button/Button";
import AddProjectShimmer from "@components/organism/Shimmer/AddProjectShimmer";

const AddProjectTemplate = () => {
  const [projectName, SetProjectName] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const handleSubmit = function(){

  }
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          margin: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ArrowBackIcon />
        <CloseIcon />
      </Box>
      <Box sx={{display:'flex'}}>
        <Box sx={{ marginLeft: 5, width:'30%' }}>
          <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1 }}>
            New Project
          </Typography>
          <Box
            sx={{
              margin: 2,
              display: "flex",
              flexDirection: "column",
              // width: "30%",
            }}
          >
            <TextField
              id="filled-basic"
              label="Project name"
              color="info"
              value={projectName}
              onChange={(e)=>SetProjectName(e.target.value)}
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  color: "#000",
                  // height: "50px",
                  width: "100%",
                  backgroundColor: "#f2f2f2",
                },
                marginBottom: 2,
              }}
            />
            <FormControl variant="filled" sx={{ marginTop: 2, width: "100%" }}>
              <InputLabel color="info" id="project-type-label">
                Severity
              </InputLabel>
              <Select
                labelId="project-type-label"
                id="project-type-select"
                color="info"
                value={selectValue}
                onChange={handleSelectChange}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="type1">High</MenuItem>
                <MenuItem value="type2">Medium</MenuItem>
                <MenuItem value="type3">Low</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ marginTop: 4, width: "100%" }}>
              <InputLabel color="info" id="project-type-label">
                Team
              </InputLabel>
              <Select
                labelId="project-type-label"
                id="project-type-select"
                color="info"
                value={selectValue}
                onChange={handleSelectChange}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="type1">High</MenuItem>
                <MenuItem value="type2">Medium</MenuItem>
                <MenuItem value="type3">Low</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="filled-basic"
              label="Due Date"
              type="date"
              color="info"
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  color: "#000",
                  marginTop: 4,
                  height: "56px",
                  width: "100%",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "8px",
                },
                marginTop: 2,
                width: "100%",
              }}
            />
            <Button
              sx={{
                width: "100%",
                marginTop: 4,
                backgroundColor: "#426DC6",
                color: "#fff",
              }}
            >
              Create Project
            </Button>
          </Box>
        </Box>
        <Box sx={{marginLeft: 10, width:'68%', border:'1px solid #CFCBCB',borderRadius:'10px'}}>

        <AddProjectShimmer projectName={projectName} />
        </Box>
      </Box>
    </Box>
  );
};

export default AddProjectTemplate;

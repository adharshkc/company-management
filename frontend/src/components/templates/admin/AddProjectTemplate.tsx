import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  SelectChangeEvent,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@components/atoms/typography/Typography";
import { useState } from "react";
import { Button } from "@components/atoms/button/Button";
import AddProjectShimmer from "@components/organism/Shimmer/AddProjectShimmer";
import { createProject } from "../../../services/AdminApi";
import { Link, useNavigate } from "react-router-dom";

const AddProjectTemplate = () => {
  const [projectName, SetProjectName] = useState("");
  const [selectPriority, setSelectPriority] = useState("");
  const [selectTeam, setSelectTeam] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [date, setDate] = useState<string>("");
  const [nameError, setNameError] = useState(false);
  const [PriorityError, setPriorityError] = useState(false);
  const [teamError, setTeamError] = useState(false);
  const [startDateError, setStartDateError] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async function () {
    setOpen(true);
    setNameError(false);
    setPriorityError(false);
    setTeamError(false);
    setStartDateError("");
    if (projectName.trim() === "") return setNameError(true);
    if (selectPriority === "") return setPriorityError(true);
    if (selectTeam === "") return setTeamError(true);
    if (startDate === null) return setStartDateError("date is required");
    if (startDateError !== "") return setStartDateError("Select a future date");
    try {
      console.log(typeof selectTeam)
      const response = await createProject({
        name: projectName,
        priority: selectPriority,
        team_id: parseInt(selectTeam),
        startDate: startDate,
      });
      setOpen(false);
      navigate("/admin/projects");
      console.log(response);
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  };
  const handlePriorityChange = (event: SelectChangeEvent<string>) =>
    setSelectPriority(event.target.value);

  const handleTeamChange = (event: SelectChangeEvent<string>) =>
    setSelectTeam(event.target.value);
  const handleClose = () => setOpen(false);
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDateError("");
    const selectedDate = event.target.value
    ? new Date(event.target.value)
    : null;
    const currentDate = new Date();
    console.log(selectedDate);
    currentDate.setHours(0, 0, 0, 0);
    if (selectedDate === null) return setStartDateError("date is required");
    if (selectedDate < currentDate)
      return setStartDateError("Select a future date");
    setStartDate(selectedDate);
    setDate(event.target.value);
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
        <Link to={"/admin/projects"}>
          <ArrowBackIcon />
        </Link>
        <Link to={"/admin/projects"}>
          <CloseIcon />
        </Link>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginLeft: 5, width: "30%" }}>
          <Typography variant="h5" sx={{ marginBottom: 2, marginLeft: 1 }}>
            New Project
          </Typography>
          <Box
            sx={{
              margin: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              id="filled-basic"
              error={nameError}
              helperText={nameError ? "Project name is required" : ""}
              label="Project name"
              color="info"
              value={projectName}
              onChange={(e) => SetProjectName(e.target.value)}
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  color: "#000",
                  width: "100%",
                  backgroundColor: "#f2f2f2",
                },
                marginBottom: 2,
              }}
            />
            <FormControl
              error={PriorityError}
              variant="filled"
              sx={{ marginTop: 2, width: "100%" }}
            >
              <InputLabel color="info" id="project-type-label">
                Severity
              </InputLabel>
              <Select
                labelId="project-type-label"
                id="project-type-select"
                error={PriorityError}
                color="info"
                value={selectPriority}
                onChange={handlePriorityChange}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
              {PriorityError && (
                <FormHelperText>select a severity</FormHelperText>
              )}
            </FormControl>
            <FormControl
              error={teamError}
              variant="filled"
              sx={{ marginTop: 4, width: "100%" }}
            >
              <InputLabel color="info" id="project-type-label">
                Team
              </InputLabel>
              <Select
                labelId="project-type-label"
                id="project-type-select"
                color="info"
                value={selectTeam}
                onChange={handleTeamChange}
                sx={{
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
              {teamError && <FormHelperText>select a team</FormHelperText>}
            </FormControl>
            <TextField
              id="filled-basic"
              label="Start Date"
              error={!!startDateError}
              helperText={startDateError ? startDateError : ""}
              type="date"
              color="info"
              value={date}
              onChange={handleDate}
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
              onClick={handleSubmit}
            >
              Create Project
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: 10,
            width: "68%",
            border: "1px solid #CFCBCB",
            borderRadius: "10px",
          }}
        >
          <AddProjectShimmer projectName={projectName} />
        </Box>
        <Backdrop onClick={handleClose} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </Box>
  );
};

export default AddProjectTemplate;

import { Typography } from "@components/atoms/typography/Typography";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@components/atoms/button/Button";

const SprintTaskRow = () => {
  const [status, setStatus] = useState("In Progress");
  const handleChange = (e: SelectChangeEvent<string>) =>
    setStatus(e.target.value);
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid #C9D4E4",
          paddingY: 1,
          paddingX: 4,
          display: "flex",
          justifyContent: "space-between",
          "&:hover .edit-icon": {
            visibility: "visible",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: 400 }}
          >
            Isuse name
          </Typography>
          <EditIcon
            className="edit-icon"
            sx={{
              visibility: "hidden",
              height: "25px",
              padding: "5px",
              marginX: 2,
              "&:hover": {
                backgroundColor: "#E4E6EA",
                cursor: "pointer",
                borderRadius: "5px",
              },
            }}
          />
        </Box>
        <Box>
          <FormControl variant="standard" size="small" style={{}}>
            <Select
              value={status}
              onChange={handleChange}
              sx={{ fontSize: "0.75rem", padding: "4px" }}
              disableUnderline
            >
              <MenuItem value="In Progress" sx={{ fontSize: "0.75rem" }}>
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
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SprintTaskRow;

import { Box, Paper } from "@mui/material";
import { Typography } from "../atoms/typography/Typography";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Input } from "../atoms/input/Input";
import style from "../../styles/adminDashboardTemplate.module.scss";
import { Button } from "../atoms/button/Button";
import { Delete, Done } from "@mui/icons-material";

const TodoContainer = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Box
      sx={{
        width: "420px",
        border: " #bdbdbd 1px solid",
        marginTop: "20px",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Typography sx={{ padding: 2 }} variant="body1">
          My Day
        </Typography>
        <Input
          inputValue={inputValue}
          fullWidth={false}
          setInputValue={setInputValue}
          placeHolder="Add todos here..."
          sx={{ width: "50%", marginTop: 1 }}
          size="small"
          type="text"
        />
        <Button
          className={style.addButton}
          sx={{
            marginTop: "13px",
            borderRadius: "2px solid black",
            color: "black",
            backgroundColor: "#EDE8F5",
          }}
          variant="outlined"
        >
          <AddIcon />
        </Button>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Paper
          variant="outlined"
          elevation={5}
          sx={{
            height: 35,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginLeft: 2 }} variant="body1" align="center">
            this is todo
          </Typography>
          <Box sx={{ paddingRight: 1 }}>
            <Done fontSize="small" sx={{ cursor: "pointer", marginRight: 3 }} />
            <Delete fontSize="small" sx={{ cursor: "pointer" }} />
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default TodoContainer;

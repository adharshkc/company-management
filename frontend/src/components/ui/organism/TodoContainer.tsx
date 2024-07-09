import { Box } from "@mui/material";
import { Typography } from "../atoms/typography/Typography";
import { useState } from "react";
import { SearchInput } from "../molecules/SearchInput";
import AddIcon from '@mui/icons-material/Add';
import { Input } from "../atoms/input/Input";
import style from '../../styles/adminDashboardTemplate.module.scss'
import { Button } from "../atoms/button/Button";
import {theme} from "../../../theme"


const TodoContainer = () => {
    const [inputValue, setInputValue] = useState('')
  return (
    <Box
      sx={{
        width: "420px",
        border: " #bdbdbd 1px solid",
        marginTop: "20px",
        borderRadius: "5px",
      }}
    >
        <Box sx={{display:'flex', justifyContent:'space-around'}}>

      <Typography sx={{ padding: 2 }} variant="body1">
        Your Todos
      </Typography>
      <Input inputValue={inputValue} fullWidth={false} setInputValue={setInputValue} sx={{width:'50%', marginTop:1}} size="small"  type="text"  />
      <Button className={style.addButton} sx={{marginTop:'13px', borderRadius: '2px solid black'}} buttonColor={theme.palette.primary.main}>
          <AddIcon/>
          
        </Button>
        </Box>
    </Box>
  );
};

export default TodoContainer;

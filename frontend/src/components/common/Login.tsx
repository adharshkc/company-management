
import styles from "../../components/styles/styledOtp.module.scss";
import { Box } from "@mui/material";
// import { theme } from "../../theme"
import { useState } from "react";
import { LoginOtp } from "@components/ui/organism/LoginOtp";
import { LoginCard } from "@components/ui/organism/LoginCard";

const Login = () => {
  const [inputValue, setInputValue] = useState('')
  return (
    <Box className={styles.adminLogin}>
      <Box className={styles.vShape}></Box>
      <Box className={styles.loginForm}>
        
        <LoginCard inputValue={inputValue} setInputValue={setInputValue}/>
     {/* <LoginOtp inputValue={inputValue} setInputValue={setInputValue}/> */}
      </Box>
    </Box>
  );
};

export default Login;

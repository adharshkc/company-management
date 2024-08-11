import { LoginOtp } from "@components/organism/Login/LoginOtp";
import styles from "../../styles/styledOtp.module.scss";
import { Box } from "@mui/material";
// import { theme } from "../../theme"
import { useState } from "react";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const onHrLogin = async (email)=>{
    // const response = await 
  }
  return (
    <Box className={styles.adminLogin}>
      <Box className={styles.vShape}></Box>
      <Box className={styles.loginForm}>
        <LoginOtp handleSubmit={onHrLogin} role="hr" />
      </Box>
    </Box>
  );
};

export default Login;

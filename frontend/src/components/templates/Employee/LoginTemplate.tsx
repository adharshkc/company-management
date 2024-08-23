
import { Backdrop, Box, CircularProgress } from "@mui/material";
import styles from "../../styles/styledOtp.module.scss";
import { LoginOtp } from "@components/organism/Login/LoginOtp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { employeeLogin } from "../../../services/EmployeeApi";

const LoginTemplate = () => {
  const [backDrop, setBackDrop] = useState(false);
    const navigate = useNavigate()
  const onEmployeeLogin=async(email:string)=>{
    try {
        const response = await employeeLogin(email)
        navigate('/verify-otp')
        sessionStorage.setItem("email", email);
        return response
    } catch (error) {
        setBackDrop(false);
      throw error;
    }
  }
  const handleClose = () => setBackDrop(false);

  return (
    <>
    <Backdrop onClick={handleClose} open={backDrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
    <Box className={styles.adminLogin}>
      <Box className={styles.vShape}></Box>
      <Box className={styles.loginForm}>
        <LoginOtp handleSubmit={onEmployeeLogin} role="Employee" />
      </Box>
    </Box>
  </>
  )
}

export default LoginTemplate
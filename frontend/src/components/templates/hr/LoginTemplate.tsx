import { LoginOtp } from "@components/organism/Login/LoginOtp";
import styles from "../../styles/styledOtp.module.scss";
import { Backdrop, Box, CircularProgress } from "@mui/material";
// import { theme } from "../../theme"
// import { useState } from "react";
import { hrLogin } from "../../../services/HrApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useErrorStore from "../../../zustand/ErrorStore";

const Login = () => {
  const {setError, clearError} = useErrorStore()
  const navigate = useNavigate()
  const [backDrop, setBackDrop] = useState(false)


  useEffect(()=>{
    clearError()
  },[])
  // const [inputValue, setInputValue] = useState("");
  const onHrLogin = async (email:string)=>{
    console.log(email)
    try {
      setBackDrop(true)
      const response = await hrLogin(email)
     navigate('/hr/verify-otp')
     sessionStorage.setItem('email', email)
     return response
    } catch (error) {
      console.log(error)
      setBackDrop(false)
      throw error
    }

  }
  const handleClose = ()=>setBackDrop(false)
  return (
    <>
      <Backdrop onClick={handleClose} open={backDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
    <Box className={styles.adminLogin}>
      <Box className={styles.vShape}></Box>
      <Box className={styles.loginForm}>
        <LoginOtp handleSubmit={onHrLogin} role="hr" />
      </Box>
    </Box>
    </>
  );
};

export default Login;

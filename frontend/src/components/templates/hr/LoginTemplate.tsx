import { LoginOtp } from "@components/organism/Login/LoginOtp";
import styles from "../../styles/styledOtp.module.scss";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { getHr, hrLogin } from "../../../services/HrApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useErrorStore from "../../../zustand/ErrorStore";

const Login = () => {
  const { clearError } = useErrorStore();
  const navigate = useNavigate();
  const [backDrop, setBackDrop] = useState(false);

  useEffect(() => {
    console.log("hello")
    clearError();
    hrDetails()
  }, []);

  const hrDetails = async ()=>{
    try {
      const response = await getHr()
      console.log(response)
      if(response.status===200){
        navigate('/hr/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onHrLogin = async (email: string) => {
    try {
      setBackDrop(true);
      const response = await hrLogin(email);
      navigate("/hr/verify-otp");
      sessionStorage.setItem("email", email);
      return response;
    } catch (error) {
      setBackDrop(false);
      throw error;
    }
  };
  const handleClose = () => setBackDrop(false);
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

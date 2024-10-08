import { VerifyOtp } from "@components/organism/Login/VerifyOtp";
import styles from "../../styles/styledOtp.module.scss";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { getHr, hrLogin, verifyOtp } from "../../../services/HrApi";
import toast, { Toaster } from "react-hot-toast";
import useErrorStore from "../../../zustand/ErrorStore";
import { useNavigate } from "react-router-dom";

const VerifyOtpTemplate = function () {
  const { setError, clearError } = useErrorStore();
  const navigate = useNavigate()
  const handleSubmit = async (otp: string) => {
    try {
      const email = sessionStorage.getItem("email");
      if (!email) {
        setError("Please try again");
        return;
      }
     const response =  await verifyOtp({ email, otp });
     localStorage.setItem("hrToken", response.data.accessToken)
     localStorage.setItem("commonToken", response.data.accessToken)
      toast.success("logined");
      sessionStorage.removeItem("email");
      navigate('/hr/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const resendOtp = async () => {
    const email = sessionStorage.getItem("email");
    if (!email) {
      setError("Please try again");
      return;
    }
    try {
      await hrLogin(email);
      toast.success("Otp Sent");
    } catch (error) {
      setError("something went wrong...");
    }
  };
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
  useEffect(() => {
    clearError();
    hrDetails()
  }, []);
  return (
    <>
      <Toaster position="top-right" />
      <Box className={styles.adminLogin}>
        <Box className={styles.vShape}></Box>
        <Box className={styles.loginForm}>
          <VerifyOtp handleSubmit={handleSubmit} resendOtp={resendOtp} />
        </Box>
      </Box>
    </>
  );
};

export default VerifyOtpTemplate;

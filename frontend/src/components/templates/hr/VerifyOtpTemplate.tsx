import { VerifyOtp } from "@components/organism/Login/VerifyOtp";
import styles from "../../styles/styledOtp.module.scss";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { hrLogin, verifyOtp } from "../../../services/HrApi";
import toast, { Toaster } from "react-hot-toast";
import useErrorStore from "../../../zustand/ErrorStore";
import useAuthStore from "../../../zustand/AuthStore";

const VerifyOtpTemplate = function () {
  const { setError, clearError } = useErrorStore();
  const {setAccessToken} = useAuthStore()
  const handleSubmit = async (otp: string) => {
    try {
      const email = sessionStorage.getItem("email");
      if (!email) {
        setError("Please try again");
        return;
      }
     const response =  await verifyOtp({ email, otp });
     setAccessToken(response.data.accessToken)
     localStorage.setItem("hrToken", response.data.accessToken)
      toast.success("logined");
      sessionStorage.removeItem("email");
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
  useEffect(() => {
    clearError();
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

import toast, { Toaster } from "react-hot-toast";
import styles from "../../styles/styledOtp.module.scss";
import { Box } from "@mui/material";
import { VerifyOtp } from "@components/organism/Login/VerifyOtp";
import { employeeLogin, verifyOtp } from "../../../services/EmployeeApi";
import { useNavigate } from "react-router-dom";
import useErrorStore from "../../../zustand/ErrorStore";
import { useSessionStore } from "../../../zustand/SessionStore";



const VerifyOtpTemplate = function(){
    const { setError } = useErrorStore();
    const {setIsAuthenticated} = useSessionStore()
    const navigate = useNavigate()
    const handleSubmit = async (otp: string) => {
      try {
        const email = sessionStorage.getItem("email");
        if (!email) {
          setError("Please try again");
          return;
        }
       const response =  await verifyOtp({ email, otp });
       localStorage.setItem("employeeToken", response.data.accessToken)
       localStorage.setItem("commonToken", response.data.accessToken)
        toast.success("logined");
        sessionStorage.removeItem("email");
        setIsAuthenticated(true)
        navigate('/')
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
          await employeeLogin(email);
          toast.success("Otp Sent");
        } catch (error) {
          setError("something went wrong...");
        }
      };
    return(
        <>
      <Toaster position="top-right" />
      <Box className={styles.adminLogin}>
        <Box className={styles.vShape}></Box>
        <Box className={styles.loginForm}>
          <VerifyOtp handleSubmit={handleSubmit} resendOtp={resendOtp} />
        </Box>
      </Box>
    </> 
    )
}

export default VerifyOtpTemplate
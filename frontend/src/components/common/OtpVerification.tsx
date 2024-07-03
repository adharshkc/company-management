import { VerifyOtp } from "@components/ui/organism/VerifyOtp"
import styles from "../../components/styles/styledOtp.module.scss";
import { Box } from "@mui/material";
import { useState } from "react";


const OtpVerification = function(){
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = ()=>{
        console.log(inputValue)
    }
    return(
        <Box className={styles.adminLogin}>
        <Box className={styles.vShape}></Box>
        <Box className={styles.loginForm}>
          <VerifyOtp inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit}/>
        </Box>
      </Box>
    )
}

export default OtpVerification
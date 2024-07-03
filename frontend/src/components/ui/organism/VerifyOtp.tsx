import { Paper } from "@mui/material"

import { theme } from "../../../theme";

import styles from "../../styles/styledOtp.module.scss";
import { Typography } from "../atoms/typography/Typography";
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Input } from "../atoms/input/Input";
import { Button } from "../atoms/button/Button";


export const VerifyOtp = ({inputValue, setInputValue, handleSubmit})=>{
    return(
        <Paper
      className={styles.loginCard}
      sx={{
        backgroundColor: "#fff",
        padding: { xs: "1rem", sm: "2rem" },
        width: { xs: "100%", sm: "90%", md: "400px" },
        height: { xs: "auto", md: "350px", lg:"260px" },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
      >LOGIN</Typography>
       <Typography
            variant="h6"
            color={"#7A7C7F"}
            align="center"
            sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
          >
            Access to our dashboard
          </Typography>
          <div className={styles.emailField}>
            <label htmlFor="">
              <Typography sx={{ fontWeight: "500", fontSize: { xs: "14px", sm: "16px" } }}>
                Enter OTP
              </Typography>
              <Typography variant="body1" color="secondary" sx={{fontWeight:"medium"}}>Change?</Typography>
            </label>
            <MuiOtpInput value={inputValue} autoFocus length={5} onChange={setInputValue}/>
          </div>
          <div>
          <Button
              buttonColor="secondary"
              fullWidth
              disabled = {inputValue.length<5}
              sx={{
                fontWeight: "medium",
                
                fontSize: { lg: "17px",xs: "16px", sm: "17px" },
                marginTop: "20px",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Typography variant="body2" color="secondary" sx={{fontWeight:"medium", marginTop:'10px'}}>Resend OTP?</Typography>
          </div>
    </Paper>
    )
}
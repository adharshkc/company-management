import { Paper } from "@mui/material"

import { theme } from "../../../theme";

import styles from "../../styles/styledOtp.module.scss";
import { Typography } from "../atoms/typography/Typography";
import { Input } from "../atoms/input/Input";
import { Button } from "../atoms/button/Button";


export const LoginOtp = ({inputValue, setInputValue})=>{
    return(
        <Paper
        elevation={6}
      className={styles.loginCard}
      sx={{
        backgroundColor: '#fff',
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
              <Typography sx={{ fontWeight: "semiBold", fontSize: { xs: "14px", sm: "16px" } }}>
                Enter your Email / Phone
              </Typography>
            </label>
            <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            type="text"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#000",
                  height: "40px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputLabel-outlined": {
                  color: "#000",
                  "&.Mui-focused": {
                    color: "#000",
                  },
                },
              }}
            />
          </div>
          <div>
          <Button
              buttonColor="secondary"
              fullWidth
              sx={{
                fontWeight: "medium",
                
                fontSize: { lg: "17px",xs: "16px", sm: "17px" },
                marginTop: "20px",
              }}
            >
              Request Otp
            </Button>
          </div>
    </Paper>
    )
}
import { Paper } from "@mui/material";
import styles from "../../styles/styledOtp.module.scss";
import { Typography } from "@components/atoms/typography/Typography";
import { Input } from "@components/atoms/input/Input";
import { Button } from "@components/atoms/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

type LoginOtpProps = {
  // inputValue: string
  // setInputValue:React.Dispatch<React.SetStateAction<string>>;
  role:string
}

export const LoginOtp:React.FC<LoginOtpProps> = ({ handleSubmit,  role }) => {
  const [inputValue, setInputValue] = useState('')
  const handleClick = ()=>{

  }
  return (
    <Paper
      elevation={6}
      className={styles.loginCard}
      sx={{
        backgroundColor: "#fff",
        padding: { xs: "1rem", sm: "2rem" },
        width: { xs: "100%", sm: "90%", md: "400px" },
        height: { xs: "auto", md: "350px", lg: "260px" },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
      >
        LOGIN
      </Typography>
      <Typography
        variant="h6"
        color={"#7A7C7F"}
        align="center"
        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
      >
        Access to our {role==='hr'?'HR ':''} dashboard
      </Typography>
      <div className={styles.emailField}>
        <label htmlFor="">
          <Typography
            sx={{
              fontWeight: "semiBold",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
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

            fontSize: { lg: "17px", xs: "16px", sm: "17px" },
            marginTop: "20px",
          }}
        >
          Request Otp
        </Button>
      {/* <h1>R u an hr</h1> */}
      <Link to={"/login"} style={{color:'#0956b5'}}>
      
      <Typography sx={{marginTop:2}} align="center" variant="body1">Employee Login?</Typography>
      </Link>
      </div>
    </Paper>
  );
};

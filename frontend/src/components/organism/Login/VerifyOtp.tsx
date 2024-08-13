import { Paper } from "@mui/material";
import styles from "../../styles/styledOtp.module.scss";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Button } from "@components/atoms/button/Button";
import { Typography } from "@components/atoms/typography/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";

type VerifyOtpProps = {
  handleSubmit: (email: string) => void;
  resendOtp: () => void;
};

export const VerifyOtp: React.FC<VerifyOtpProps> = ({
  handleSubmit,
  resendOtp,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    handleSubmit(inputValue);
  };

  const otpResend = async () => {
    resendOtp();
  };
  return (
    <Paper
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
        OTP
      </Typography>
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
          <Typography
            sx={{ fontWeight: "500", fontSize: { xs: "14px", sm: "16px" } }}
          >
            Enter OTP
          </Typography>
          <Link style={{ textDecoration: "none" }} to={"/hr/login"}>
            <Typography
              variant="body1"
              color="secondary"
              sx={{ fontWeight: "medium" }}
            >
              Change?
            </Typography>
          </Link>
        </label>
        <MuiOtpInput
          value={inputValue}
          autoFocus
          length={5}
          onChange={setInputValue}
        />
      </div>
      <div>
        <Button
          buttonColor="secondary"
          fullWidth
          disabled={inputValue.length < 5}
          sx={{
            fontWeight: "medium",

            fontSize: { lg: "17px", xs: "16px", sm: "17px" },
            marginTop: "20px",
          }}
          onClick={handleClick}
        >
          Submit
        </Button>
        <Typography
          variant="body2"
          color="secondary"
          className={styles.resendOtp}
          onClick={otpResend}
          sx={{ fontWeight: "medium", marginTop: "10px" }}
        >
          Resend OTP?
        </Typography>
      </div>
    </Paper>
  );
};

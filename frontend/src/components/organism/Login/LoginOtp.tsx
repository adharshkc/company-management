import { Alert, CircularProgress, Paper, Snackbar, SnackbarCloseReason } from "@mui/material";
import styles from "../../styles/styledOtp.module.scss";
import { Typography } from "@components/atoms/typography/Typography";
import { Input } from "@components/atoms/input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { emailPattern } from "../../../constants/constants";

type LoginOtpProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: (email: string) => Promise<any>;
  role: string;
};

export const LoginOtp: React.FC<LoginOtpProps> = ({ handleSubmit, role }) => {
  const [inputValue, setInputValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setEmailError("");
    if (!inputValue.trim() || !emailPattern.test(inputValue)) {
      setEmailError("Please enter a valid email...");
      setOpen(true);
      return;
    }
    try {
      setLoading(true)
      const response = await handleSubmit(inputValue);
      console.log(response)
    } catch (error) {
      setOpen(true)
      setLoading(false);
      setEmailError("User not found.");
    }
  };
  const handleClose = (event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
    <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={emailError}
      />
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
          Access to our {role === "hr" ? "HR " : ""} dashboard
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
            required
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
          <LoadingButton
            loading={loading}
            disableRipple
            onClick={handleClick}
            fullWidth
            loadingIndicator={<CircularProgress color="primary" size={16} />}
            sx={{
              fontWeight: "medium",
              backgroundColor: "#7091e6",
              fontSize: { lg: "17px", xs: "16px", sm: "17px" },
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#5a75b9",
              },
            }}
          >
            <span>Request OTP</span>
          </LoadingButton>
          <Link to={"/login"} style={{ color: "#0956b5" }}>
            <Typography sx={{ marginTop: 2 }} align="center" variant="body1">
              Employee Login?
            </Typography>
          </Link>
        </div>
        
      </Paper>
    </>
  );
};

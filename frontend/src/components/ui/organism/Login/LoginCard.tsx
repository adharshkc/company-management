import styles from "../../styles/styledButton.module.scss"
import { Alert, Paper, Stack } from "@mui/material";
import { Typography } from "../../atoms/typography/Typography";
import { theme } from "../../../../theme";
import { Input } from "../../atoms/input/Input";
import { Button } from "../../atoms/button/Button";
import { useState } from "react";
import { LoginFormValues, onSubmit } from "types/types";
import useErrorStore from "../../../../zustand/ErrorStore";
import toast, { Toaster } from "react-hot-toast"

type LoginFormProps = {
  onSubmit: onSubmit
}

export const LoginCard : React.FC<LoginFormProps>= ({onSubmit}) => {
  const {error, setError, clearError} = useErrorStore()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = ()=>{
    if(!email.trim()){
      setError("Enter your email")
      return
    }
     if(!password.trim()){
      setError("Enter your password")
      return
    }

    const formValues: LoginFormValues = {email, password}
    onSubmit(formValues)
  }
  return (
    <Paper
      className={styles.loginCard}
      sx={{
        backgroundColor: theme.palette.primary.main,
        padding: { xs: "1rem", sm: "2rem" },
        width: { xs: "100%", sm: "90%", md: "400px" },
        height: { xs: "auto", md: "450px" },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "medium", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
      >Login</Typography>
       <Typography
            variant="h6"
            color={"#7A7C7F"}
            align="center"
            sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
          >
            Access to our dashboard
          </Typography>
          <div className={styles.emailField} style={{marginTop:"30px"}}>
            <label htmlFor="">
              <Typography sx={{ fontWeight: "semiBold", fontSize: { xs: "14px", sm: "16px", lg:"18px" } }}>
                Enter your Email
              </Typography>
            </label>
            <Input
            inputValue={email}
            setInputValue={setEmail}
            // onChange={(e)=>setEmail(e.target.value)}
            type="email"
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
          </div>{
            
          <div className={styles.emailField}style={{marginTop:"30px"}}>
            <label htmlFor="" style={{display:"flex", justifyContent:'space-between'}}>
              <Typography sx={{ fontWeight: "semiBold", fontSize: { xs: "14px", sm: "16px" } }}>
                Password
              </Typography>
              <Typography variant="body2">Forgot Password</Typography>
            </label>
            <Input
            inputValue={password}
            setInputValue={setPassword}
              fullWidth
              type="password"
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
          }
          <div>
          <Button
              buttonColor="secondary"
              fullWidth
              onClick={handleSubmit}
              sx={{
                fontWeight: "semiBold",
                fontSize: { xs: "16px", sm: "20px" },
                marginTop: "20px",
              }}
            >
              Login
            </Button>
            <Toaster position="top-right"/>
           
          </div>
    </Paper>
  );
};

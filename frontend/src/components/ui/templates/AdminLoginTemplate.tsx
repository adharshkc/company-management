import { Button } from "@components/ui/atoms/button/Button";
import styles from "../../../components/styles/styledButton.module.scss";
import { Box, Paper, } from "@mui/material";
// import { theme } from "../../../theme";
// import { Input } from "@components/ui/atoms/input/Input";
// import { useState } from "react";
// import { Typography } from "@components/ui/atoms/typography/Typography";
import { LoginCard } from "../organism/LoginCard";
import { onSubmit } from "types/types";


type LoginTemplateProps = {
  onSubmit: onSubmit
}
const AdminLoginTemplate: React.FC<LoginTemplateProps> = ({onSubmit}) => {
  return (
    <Box className={styles.adminLogin}>
      <Box className={styles.vShape}></Box>
      <Box className={styles.loginForm}>
        {/* <Paper
          className={styles.loginCard}
          sx={{
            backgroundColor: theme.palette.primary.main,
            padding: { xs: "1rem", sm: "2rem" },
            width: { xs: "100%", sm: "90%", md: "400px" },
            height: { xs: "auto", md: "350px" },
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
            Access to our dashboard
          </Typography>
          <div className={styles.emailField}>
            <label htmlFor="">
              <Typography sx={{ fontWeight: "semiBold", fontSize: { xs: "14px", sm: "16px" } }} >
                Email Address
              </Typography>
            </label>
            <Input
            
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
          <div className={styles.emailField}>
            <label htmlFor="">
              <Typography sx={{ fontWeight: "semiBold", fontSize: { xs: "14px", sm: "16px" } }}>
                Password
              </Typography>
              <Typography variant="body2">Forgot Password</Typography>
            </label>
            <Input
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
          <div>

            <Button
              buttonColor="secondary"
              fullWidth
              sx={{
                fontWeight: "semiBold",
                fontSize: { xs: "16px", sm: "20px" },
                marginTop: "20px",
              }}
            >
              Login
            </Button>
          </div>
        </Paper> */}
        <LoginCard onSubmit={onSubmit}/>
      </Box>
    </Box>
  );
};

export default AdminLoginTemplate;

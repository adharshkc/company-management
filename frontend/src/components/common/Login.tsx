// import { Button } from "@components/ui/atoms/button/Button";
import styles from "../../components/styles/styledButton.module.scss";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { theme } from "../../theme";

const Login = () => {
  return (
    <Box className={styles.adminLogin}>
      <Box className={styles.vShape}></Box>
      <Box className={styles.loginForm}>
        <Paper
          className={styles.loginCard}
          sx={{
            backgroundColor: theme.palette.primary.main,
            padding: { xs: "1rem", sm: "2rem" },
            width: { xs: "100%", sm: "90%", md: "400px" },
            height: { xs: "auto", md: "350px" },
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            align="center"
            component="div"
            sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
          >
            LOGIN
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color={"#7A7C7F"}
            sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
          >
            Access to our dashboard
          </Typography>
          <div className={styles.emailField}>
            <label htmlFor="">
              <Typography sx={{ fontWeight: "semiBold", fontSize: { xs: "14px", sm: "16px" } }}>
                Email Address
              </Typography>
            </label>
            <TextField
              variant="outlined"
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
            <TextField
              variant="outlined"
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
              variant="contained"
              disableRipple
              color="secondary"
              disableElevation
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
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;

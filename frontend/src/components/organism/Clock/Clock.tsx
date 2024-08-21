import { Button } from "@components/atoms/button/Button";
import { Typography } from "@components/atoms/typography/Typography";
import { Box } from "@mui/material";
import { theme } from "../../../theme";

const Clock = () => {
  return (
    <Box
      sx={{
        width: "440px",
        border: " #bdbdbd 1px solid",
        marginTop: "20px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ padding: 1 }} variant="h6">
        Clock In{" "}
      </Typography>
      <Box
        sx={{
          border: " #bdbdbd 0.5px solid",
          margin: "0px 16px 16px 16px",
          backgroundColor: "#f7f7f7",
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ paddingLeft: 2, paddingTop: "5px" }} variant="body2">
          Work Time
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px 20px 20px",
            backgroundColor: "#F3F0F9",
          }}
        >
          <Typography variant="h6">5 Hrs: 50 Min</Typography>
          <Button
            sx={{ backgroundColor: theme.palette.primary.dark, color: "white" }}
          >
            {" "}
            &gt; Clock-In
          </Button>
        </Box>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-evenly", marginBottom:2}}>
        <Box>
            <Typography variant="body1">
                <Box sx={{ fontWeight: 400, fontSize:18 }}>Total Time</Box>
                </Typography>
            <Typography variant="body2">05 Hrs: 50 Min</Typography>
        </Box>
        <Box>
            <Typography variant="body1">
                <Box sx={{ fontWeight: 400, fontSize:18 }}>Remaining</Box>
                </Typography>
            <Typography variant="body2">05 Hrs: 50 Min</Typography>
        </Box>
        <Box>
            <Typography variant="body1">
                <Box sx={{ fontWeight: 400, fontSize:18 }}>Overtime</Box>
                </Typography>
            <Typography variant="body2">00 Hrs: 50 Min</Typography>
        </Box>
       
      </Box>
    </Box>
  );
};

export default Clock;

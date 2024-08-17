import { Button } from "@components/atoms/button/Button";
import { Typography } from "@components/atoms/typography/Typography";
import { Box } from "@mui/material";

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

      <Typography sx={{paddingLeft:2}} variant="body1">Work Time</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", }}
      >
        <Typography variant="h6">5 Hrs: 50 Min</Typography>
        <Button>Clock In</Button>
      </Box>
    </Box>
  );
};

export default Clock;

import { Box } from "@mui/material";
import { Typography } from "../../atoms/typography/Typography";

const EmployeeStatics = () => {
  return (
    <Box
      sx={{
        width: "420px",
        border: " #bdbdbd 1px solid",
        marginTop: "20px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ padding: 2, color: "" }} variant="h6">
        Employee Statistics
      </Typography>
      <Box sx={{ height: "0.5px", backgroundColor: "#dfdfdf" }}></Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 3 }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography>
            <Typography variant="h4">42</Typography> Total <br /> Employees
          </Typography>
          <Box
            sx={{ border: "1px solid #52595A", height: "85px", marginLeft: 4 }}
          ></Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography>
            <Typography variant="h4">42</Typography>On Leave <br /> Employees
          </Typography>
          <Box
            sx={{ border: "1px solid #52595A", height: "85px", marginLeft: 4 }}
          ></Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography>
            <Typography variant="h4">42</Typography>Pending <br /> Tickets
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeStatics;

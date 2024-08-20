import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import style from "../../styles/hrEmployeeTemplate.module.scss";
import { Box } from "@mui/material";
import { Typography } from "@components/atoms/typography/Typography";
import EmployeeCard from "@components/organism/Cards/EmployeeCard";
import AddEmployee from "@components/organism/Form/AddEmployee";
import { useState } from "react";

const EmployeeTemplate = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const addEmployee = async function name({name, email, phone, startDate, role}) {
    
  }
  const handleModal =(bool:boolean)=>{
    setOpenModal(bool)
  }
  return (
    <div className={style.bodyPart}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="body1" className={style.heading}>
          <span className={style.heading1}>Dashboard </span>
          <span className="heading2">/ Project</span>{" "}
        </Typography>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              marginRight: 4,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
            onClick = {()=>setOpenModal(true)}
          >
            Add Employee
          </Button>
      </Box>
      {/* <Box className={style.line}></Box> */}
      <Box 
      sx={{display:"flex", justifyContent:"space-evenly", width:"100%", marginY:5 , flexWrap:"wrap", gap:2}}
      >
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
      </Box>
      <Box>{openModal&&
       <AddEmployee addEmployee={addEmployee} openModal={handleModal}/>
       }
      </Box>
    </div>
  );
};

export default EmployeeTemplate;

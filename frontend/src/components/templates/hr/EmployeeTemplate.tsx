import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import style from "../../styles/hrEmployeeTemplate.module.scss";
import { Box } from "@mui/material";
// import { Typography } from "@components/atoms/typography/Typography";
import EmployeeCard from "@components/organism/Cards/EmployeeCard";
import AddEmployee from "@components/organism/Form/AddEmployee";
import { useState } from "react";
import { createEmployee } from "../../../services/HrApi";
import { EmployeeDetail } from "../../../types/types";
import toast, { Toaster } from "react-hot-toast";
import { useEmployees } from "../../../hooks/useEmployees";
import Header from "@components/molecules/Header";

const EmployeeTemplate = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const {employees, getEmployees} = useEmployees()
  const addEmployee = async function name({name, email, phone, role, team, joiningDate,}:EmployeeDetail) {
    try {
      await createEmployee({name, email, phone, role, team, joiningDate})
      setOpenModal(false)
      toast.success("Successfully created Employee")
      getEmployees()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      if(error.response.data.error.message){
        toast.error(error.response.data.error.message)
      }
      toast.error("something went wrong")
    }
  }

  const handleModal =(bool:boolean)=>{
    setOpenModal(bool)
  }
  return (
    <div className={style.bodyPart}>
      <Toaster position="top-right" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Header header1="Dashboard" header2="Employees"/>
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
      sx={{display:"flex", justifyContent:"flex-start", width:"100%", marginY:5 , flexWrap:"wrap", gap:2}}
      >{
        employees.map((employee:EmployeeDetail)=>(

          <EmployeeCard key={employee?.employee_id} employee={employee}/>
        ))
      }
        
      </Box>
      <Box>{openModal&&
       <AddEmployee addEmployee={addEmployee} openModal={handleModal}/>
       }
      </Box>
    </div>
  );
};

export default EmployeeTemplate;

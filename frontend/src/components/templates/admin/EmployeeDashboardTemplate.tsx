import {
  Backdrop,
  Box,
  CircularProgress,

} from "@mui/material";
import style from "../../styles/adminEmployeeTemplate.module.scss";
import { Button } from "@components/atoms/button/Button";
import { theme } from "../../../theme";
import { useState } from "react";
import AddHr from "@components/organism/Form/AddHr";
import { createHr } from "../../../services/AdminApi";
import { HrDetails } from "../../../types/types";
import toast, { Toaster } from "react-hot-toast";

const EmployeeDashboardTemplate = () => { 
  const[openModal, setOpenModal] = useState<boolean>(false)
  const[backDrop, setBackdrop] = useState<boolean|null>(false)
  const addHr=async function({name, email, phone, startDate}:HrDetails){
    try {
      const response = await createHr({name, email, phone, startDate})
      if(response.status == 200){
        setOpenModal(false)
        toast.success('Hr added successfully')
      }
      return response
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error.response.data.error.message)
      if(error.response.data.error.message){
        toast.error(error.response.data.error.message)
      }
      // toast.error(error)
      setBackdrop(false)
      return error
    }
  }
  const handleClose = () => setBackdrop(false);
  const handleModal =(bool:boolean)=>{
    setOpenModal(bool)
  }
  return (
    <div className={style.bodyPart}>
      <Toaster position="top-right"/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box>
        </Box>
        {/* <Typography variant="h6">Employees</Typography> */}
        {/* <Link to={"/admin/projects/add"}> */}
          <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              marginRight: 4,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
            onClick={()=>setOpenModal(true)}
          >
            Add HR
          </Button>
        {/* </Link> */}
      </Box>
      <Box>{openModal&&
       <AddHr addHr={addHr} openModal={handleModal}/>
       }
      </Box>
      <Backdrop onClick={handleClose} open={backDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
    </div>
  );
};

export default EmployeeDashboardTemplate;

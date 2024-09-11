import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import {theme } from "../../../theme"
import { useIssueStore } from "../../../zustand/IssueStore"

type IssueForm ={
    issueName:string
}

const IssueForm:React.FC<IssueForm> = ({issueName}) => {

    const {setIsModalIssue} = useIssueStore()
    const handleClose=()=>{
        setIsModalIssue(false)
    }
  return (
    <>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle color="#28231d">Edit Sprint: {issueName}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Name*"
            type="text"
            sx={{
              width: "300px",
              marginBottom: "26px",
              "& .MuiInputBase-input": {
                color: "#000",
              },
              "& .MuiInputLabel-root": {
                color: "#000",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#000",
              },
            }}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              sx={{
                width: "300px",
                "& .MuiInputBase-input": {
                  color: "#000",
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#000",
                },
              }}
              value={startDate}
              onChange={handleStartDate}
              slotProps={{
                textField: {
                  error: !!startDateError,
                  helperText: startDateError,
                },
              }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              sx={{
                width: "300px",
                marginTop: "26px",
                "& .MuiInputBase-input": {
                  color: "#000",
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#000",
                },
              }}
              value={endDate}
              onChange={handleEndDate}
              slotProps={{
                textField: {
                  error: !!endDateError,
                  helperText: endDateError,
                },
              }}
            />
          </LocalizationProvider> */}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start", margin: 3 }}>
          <Button
            sx={{ backgroundColor: theme.palette.primary.dark, color: "white" }}
            // onClick={(e) => handleClick(e)}
          >
            Add
          </Button>
          <Button
            sx={{
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
            onClick={() => setIsModalIssue(false)}
          >
            Cancel
          </Button>
        </DialogActions>
        {/* <Backdrop onClick={handleClose} open={backDrop}>
          <CircularProgress color="inherit" />
        </Backdrop> */}
      </Dialog>
    </>
  )
}

export default IssueForm
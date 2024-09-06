import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'



type DeleteSprintProps={
    deleteModal:(bool:boolean)=>void
    deleteSprintHandler:()=>void
}
const DeleteSprint:React.FC<DeleteSprintProps> = ({deleteModal, deleteSprintHandler}) => {
  return (
    <div><Dialog
    open={true}
    PaperProps={{
      component: "form",
    }}
    sx={{ marginBottom: 2 }}
  >
    <DialogTitle marginTop={2}>Delete Sprint</DialogTitle>
    <DialogContent sx={{display:"flex"}}>
        <Typography variant='body2'>

    Are you sure you want to delete sprint?
        </Typography>
    </DialogContent>
    <DialogActions
      sx={{ justifyContent: "flex-end", marginRight: 2, marginBottom: 3 }}
    > 
      <Button
        sx={{
            color:"black",
          "&:hover": {
            color: "black",
            backgroundColor: "#f1f2f4",
          },
        }}
        onClick={() => deleteModal(false)}
      >
        Cancel
      </Button>
      <Button
        sx={{ backgroundColor: "#c9372c", color: "white","&:hover": {
            color: "white",
            backgroundColor: "#AE2E24",
          }, }}
        onClick={deleteSprintHandler}
      >
        Delete
      </Button>
    </DialogActions>
  </Dialog></div>
  )
}

export default DeleteSprint
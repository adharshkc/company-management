
import EmptySprintRow from "@components/molecules/EmptySprintRow";
import NewSprintRow from "@components/molecules/NewSprintRow";
import EditIcon from "@mui/icons-material/Edit";
import SprintTaskRow from "@components/molecules/SprintTaskRow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SprintForm from "../Form/SprintForm";
import { Dayjs } from "dayjs";
import { updateSprint } from "../../../services/EmployeeApi";
import toast, {Toaster} from "react-hot-toast";
import { useMonthAndDay } from "../../../hooks/useMonthAndDay";
import { useSprints } from "../../../hooks/useSprints";

const Sprint = ({ sprint }) => {
  const [startButton, setStartButton] = useState<boolean>(true);
  const [newIssue, setNewIssue] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null)
  const {fetchSprints} = useSprints()

  const buttonDisable = () => {
    setStartButton(sprint.issues.length === 0);
  };
  const startDay = useMonthAndDay(sprint?.startDate)
  const endDay = useMonthAndDay(sprint?.endDate)

  useEffect(() => {
    buttonDisable();
  }, [sprint?.issues]);
  const updateSprintHandler = async(
    name: string,
    startDate: Date | undefined,
    endDate: Dayjs | Date | null | undefined
  ) => {
    try {
      const response = await updateSprint(name, startDate, endDate, sprint.sprint_id)
      if(response.status == 200){
        setOpenModal(false)
        fetchSprints()
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.log(error)
      if(error.response.data.message){
        toast.error(error.response.data.message)
      }
    }
  };
  const handleClick = () => setNewIssue(true);
  const handleModal = (bool: boolean) => setOpenModal(bool);
  const handleMenuOpen = (e:React.MouseEvent<HTMLElement>)=>setAnchorEl(e)
  const handleMenuClose = ()=>setAnchorEl(null)
  return (
    <>
    <Toaster position="top-right"/>
      <Box
        sx={{
          backgroundColor: "#f7f8f9",
          borderRadius: "5px",
          padding: 1,
          marginTop: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", paddingX: 3 }}>
            {openModal && (
              <SprintForm
                sprintName={sprint.name}
                updateSprint={updateSprintHandler}
                openModal={handleModal}
              />
            )}
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 400, color: "#172B4D" }}
            >
              {sprint.name}
            </Typography>
            {sprint.startDate || sprint.endDate ? (
              <Typography
                variant="body2"
                sx={{ marginLeft: 2, marginTop: "1px", color: "#172B4D" }}
              >
                {startDay} - {endDay}
              </Typography>
            ) : (
              <Box
                sx={{
                  marginLeft: 3,
                  display: "flex",
                  "&:hover": {
                    backgroundColor: "#E4E6EA",
                    cursor: "pointer",
                    borderRadius: "5px",
                  },
                }}
                onClick={() => handleModal(true)}
              >
                <EditIcon sx={{ marginTop: "2px", height: "15px" }} />
                <Typography variant="body2" sx={{ color: "#172B4D" }}>
                  {" "}
                  Add Dates
                </Typography>
              </Box>
            )}
            <Typography
              variant="caption"
              sx={{ marginX: 1, marginTop: "2.5px", color: "#172B4D" }}
            >
              (0 Issues)
            </Typography>
          </Box>
          <Box>
            <Button
              disabled={startButton}
              sx={{
                "&:hover": { backgroundColor: "#D5D9DF" },
                color: "#172B4D",
              }}
            >
              {sprint.status} Sprint
            </Button>
            <Button
              sx={{ "&:hover": { backgroundColor: "#D5D9DF" }, marginX: "2px" }}
              onClick={handleMenuOpen}
            >
              <MoreHorizIcon sx={{ color: "#172B4D" }} />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'bottom', // Adjust anchor position if needed
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 1</MenuItem>
             
            </Menu>
          </Box>
        </Box>
        {sprint.issues.length === 0 ? (
          <NewSprintRow />
        ) : (
          <Box
            sx={{
              marginTop: 2,
              borderRadius: "5px",
              border: "1px solid #C9D4E4",
              borderBottom: 0,
              backgroundColor: "white",
            }}
          >
            {sprint.issues.map(() => (
              <>
                <SprintTaskRow />
              </>
            ))}
          </Box>
        )}
        {newIssue ? (
          <Box
            sx={{
              borderRadius: "5px",
              border: "1px solid #388BFF",
              borderBottom: 0,
              backgroundColor: "white",
            }}
          >
            <EmptySprintRow />
          </Box>
        ) : (
          <Box sx={{ paddingX: 3, paddingY: 2, paddingBottom: "10px" }}>
            <Typography
              sx={{ color: "#172B4D", cursor: "pointer" }}
              onClick={handleClick}
            >
              {" "}
              + Create Issue
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Sprint;

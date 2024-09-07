import EmptySprintRow from "@components/molecules/EmptySprintRow";
import NewSprintRow from "@components/molecules/NewSprintRow";
import EditIcon from "@mui/icons-material/Edit";
import SprintTaskRow from "@components/molecules/SprintTaskRow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import SprintForm from "../Form/SprintForm";
import { Dayjs } from "dayjs";
import { useMonthAndDay } from "../../../hooks/useMonthAndDay";
import { useSprints } from "../../../hooks/useSprints";
import MoreOptions from "@components/molecules/MoreOptions";
import DeleteSprint from "@components/molecules/DeleteSprint";

const Sprint = ({ sprint }) => {
  const [startButton, setStartButton] = useState<boolean>(true);
  const [newIssue, setNewIssue] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const { fetchSprints, sprintUpdate, sprintDelete } = useSprints();

  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);
  const startDay = useMonthAndDay(sprint?.startDate);
  const endDay = useMonthAndDay(sprint?.endDate);

  useEffect(() => {
    buttonDisable();
  }, [sprint?.issues]);

  const updateSprintHandler = async (
    name: string,
    startDate: Date | undefined,
    endDate: Dayjs | Date | null | undefined
  ) => {
    const response = await sprintUpdate(
      name,
      startDate,
      endDate,
      sprint.sprint_id
    );
    if (response?.status == 200) {
      setOpenModal(false);
      fetchSprints();
    }
  };
  
  const deleteSprintHandler=async()=>{
    const response = await sprintDelete(sprint.sprint_id)
    if (response?.status == 200) {
      setOpenModal(false);
      fetchSprints();
    }
  }
  const buttonDisable = () => setStartButton(sprint?.issues?.length === 0);
  const handleClick = () => setNewIssue(true);
  const handleModal = (bool: boolean) => setOpenModal(bool);
  const handleMenuOpen = () => setOpenMenu(true);
  const handleDeleteModal = (bool:boolean)=>setDeleteModal(bool)
  return (
    <>
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
            {deleteModal&&<DeleteSprint deleteModal={handleDeleteModal} deleteSprintHandler={deleteSprintHandler}/>}
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
            {openMenu && (
              <Box ref={optionsRef} sx={{ zIndex: 1, position: "absolute" }}>
                <MoreOptions clickEdit={handleModal} clickDelete={handleDeleteModal} />
              </Box>
            )}
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
              border: "2px solid #00a3bf",
              borderBottom: "1px solid #00a3bf",
              backgroundColor: "white",
            }}
          >
            <EmptySprintRow />
          </Box>
        ) : (
          <Box sx={{ paddingX: 3,borderRadius: "5px", paddingY: 2, paddingBottom: "10px", "&:hover": {backgroundColor:"#e9ebee"} }}>
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

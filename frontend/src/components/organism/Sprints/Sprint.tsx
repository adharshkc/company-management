/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useDeleteSprint, useUpdateSprint } from "../../../hooks/useSprints";
import MoreOptions from "@components/molecules/MoreOptions";
import DeleteSprint from "@components/molecules/DeleteSprint";
import { createIssue, getIssue } from "../../../services/EmployeeApi";
import { Sprint as SprintType } from "types/types";
import IssueSkeleton from "../Skeleton/IssueSkeleton";
import { PulseLoader } from "react-spinners";

type SprintProps = {
  sprint: SprintType;
};

const Sprint: React.FC<SprintProps> = ({ sprint }) => {
  const [startButton, setStartButton] = useState<boolean>(true);
  const [newIssue, setNewIssue] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [issueLoading, setIssueLoading] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  // const { data:issues } = useIssueFetch(sprint.sprint_id);
  const [issues, setIssues] = useState([]);
  const { mutate: updateSprint } = useUpdateSprint();
  const { mutate: sprintDelete } = useDeleteSprint();
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
        setNewIssue(false);
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
  }, [issues]);

  // const handleBackdropClose=()=>{setIssueLoading(false)}
  const updateSprintHandler = async (
    name: string,
    startDate: Date | undefined,
    endDate: Dayjs | Date | null | undefined
  ) => {
    updateSprint({ name, startDate, endDate, sprint_id: sprint.sprint_id });
    setOpenModal(false);
  };

  const deleteSprintHandler = async () => {
    sprintDelete(sprint.sprint_id);
  };
  const fetchIssue = async () => {
    const response = await getIssue(sprint.sprint_id);
    setIssues(response.data.issues);
    setLoading(false);
    setIssueLoading(false);
  };
  useEffect(() => {
    fetchIssue();
  }, []);

  const addIssue = async (issueName: string) => {
    setIssueLoading(true);
    const response = await createIssue(issueName, sprint.sprint_id);
    if (response?.status == 200) {
      fetchIssue();
      setNewIssue(false);
    }
  };

  const buttonDisable = () => setStartButton(issues?.length === 0);
  const handleClick = () => setNewIssue(true);
  const handleModal = (bool: boolean) => setOpenModal(bool);
  const handleMenuOpen = () => setOpenMenu(true);
  const handleDeleteModal = (bool: boolean) => setDeleteModal(bool);

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
                sprintStartDate={sprint.startDate}
                sprintEndDate={sprint.endDate}
                updateSprint={updateSprintHandler}
                openModal={handleModal}
              />
            )}
            {deleteModal && (
              <DeleteSprint
                totalIssues={issues?.length}
                deleteModal={handleDeleteModal}
                deleteSprintHandler={deleteSprintHandler}
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
              ({issues?.length} Issues)
            </Typography>
            <PulseLoader
              size={9}
              loading={issueLoading}
              color="#94a5ff"
              cssOverride={{ position: "relative" }}
            />
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
                <MoreOptions
                  clickEdit={handleModal}
                  clickDelete={handleDeleteModal}
                />
              </Box>
            )}
          </Box>
        </Box>
        {loading && (
          <Box
            sx={{
              marginTop: 2,
              borderRadius: "5px",
              border: "1px solid #C9D4E4",
              backgroundColor: "white",
            }}
          >
            <IssueSkeleton />
            <IssueSkeleton />
            <IssueSkeleton />
          </Box>
        )}
        {!issues || issues?.length === 0 ? (
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
            {issues?.map((issue: any) => (
              <SprintTaskRow
                key={issue.issue_id}
                issue={issue}
                sprintColumns={sprint.columns}
                fetchIssue={fetchIssue}
              />
            ))}
          </Box>
        )}
        {newIssue ? (
          <Box
            ref={optionsRef}
            sx={{
              borderRadius: "5px",
              border: "2px solid #00a3bf",
              borderBottom: "1px solid #00a3bf",
              backgroundColor: "white",
            }}
          >
            <EmptySprintRow issueName="" issueHandler={addIssue} />
          </Box>
        ) : (
          <Box
            sx={{
              paddingX: 3,
              borderRadius: "5px",
              paddingY: 2,
              paddingBottom: "10px",
              "&:hover": { backgroundColor: "#e9ebee" },
            }}
          >
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

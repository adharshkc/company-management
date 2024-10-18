import Header from "@components/molecules/Header";
import style from "../../styles/boardTemplate.module.scss";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { theme } from "../../../theme";
import PlusIcon from "../../../assets/icons/PlusIcon";
import { useEffect, useMemo, useState } from "react";
import { useFetchStartedSprint } from "../../../hooks/useSprints";
import Columns from "@components/organism/Columns/Columns";
import CheckIcon from "../../../assets/icons/CheckIcon";
import CrossIcon from "../../../assets/icons/CrossIcon";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Column } from "types/types";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { useAddColumns } from "../../../hooks/useColumns";
import { deleteColumn, updateColumnOrder } from "../../../services/EmployeeApi";

const BoardTemplate = () => {
  const { data: sprint, isLoading } = useFetchStartedSprint();
  const { mutate: addNewColumn } = useAddColumns()
  // console.log(sprint);
  const [columns, setColumns] = useState<Column[]>([]);
  const [newColumn, setNewColumn] = useState<boolean>(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [deleteColumnId, setDeleteColumnId] = useState<number>()
  const [deleteColumnModal, setDeleteColumnModal] = useState(false)

  const columnOrder = useMemo(
    () => columns.map((col) => col.order),
    [columns]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3
      }
    })
  )

  useEffect(() => {
    if (sprint) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setColumns(sprint.columns.sort((a: any, b: any) => a.order - b.order));
    }
  }, [sprint]);

  const handleNewColumn = () => {
    if (!newColumnName.trim()) return;
    const newCol = {
      name: newColumnName,
      order: columns.length + 1,
      sprint_id: sprint.sprint_id,
    };
    addNewColumn(newCol);

    setNewColumnName("");
    setNewColumn(false);
  };
  const handleDeleteColumn = async () => {
    await deleteColumn(deleteColumnId)
    const selectedColumn = columns.find((col) => col.column_id === deleteColumnId) as Column
    const indexOfColumn = columns.indexOf(selectedColumn)
    columns.splice(indexOfColumn, 1)
    setColumns(columns)
    setDeleteColumnModal(false)
  }

  const handleDeleteColumnModal = (id: number, bool: boolean) => {
    setDeleteColumnModal(bool)
    setDeleteColumnId(id)
  }

  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      // console.log(event.active.data)
      return;
    }
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over, collisions } = event;
    console.log("collison", collisions)
    if (!over) return;
    console.log("active", active)
    console.log("over", over)
    const activeColumnId = active.id;
    const overColumnId = over.id;
    if (activeColumnId === overColumnId) return;
    const activeColumnIndex = columns.findIndex(
      (col) => col.order === activeColumnId
    );
    const overColumnIndex = columns.findIndex(
      (col) => col.order === overColumnId
    );
    console.log(activeColumn);
    console.log(overColumnIndex);
    if (activeColumnIndex !== -1 && overColumnIndex !== -1) {
      // Update columns state after reordering
      console.log(typeof activeColumnId)
      updateColumnOrder(active.id, over.id, sprint.sprint_id)
      setColumns((columns) => arrayMove(columns, activeColumnIndex, overColumnIndex));
    }
  };
  if (isLoading) {
    return (
      <div className={style.bodyPart}>
        <h1>Loading</h1>
      </div>
    );
  }
  if (columns.length === 0) return (
    <div className={style.bodyPart}>
      <h3>No columns...</h3>
    </div>
  )
  return (
    <div className={style.bodyPart}>
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className={style.header}>
          <Header header1="Home" header2="Board" />
          <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              marginRight: 4,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Complete Sprint
          </Button>
        </div>

        <SortableContext items={columnOrder}>
          <div className={style.ColumnBody}>
            {columns?.map((column) => (
              <Columns deleteColumn={handleDeleteColumnModal} column={column} key={column.column_id} />
            ))}
            {newColumn ? (
              <div className={style.inputContainer}>
                <input
                  type="text"
                  placeholder=""
                  value={newColumnName}
                  onChange={(e) => setNewColumnName(e.target.value)}
                />
                <div>
                  <button className={style.confirm} onClick={handleNewColumn}>
                    <CheckIcon />
                  </button>
                  <button
                    className={style.cancel}
                    onClick={() => {
                      setNewColumn(false);
                      setNewColumnName("");
                    }}
                  >
                    <CrossIcon />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <Button
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "black",
                    width: "24px",
                    minWidth: "40px",
                    marginRight: 3,
                    "&:hover": {
                      backgroundColor: "#DCDFE4",
                    },
                  }}
                  onClick={() => setNewColumn(true)}
                >
                  <PlusIcon />
                </Button>
              </div>
            )}
          </div>
        </SortableContext>
        {createPortal(
          <DragOverlay>
            {activeColumn && <Columns deleteColumn={handleDeleteColumnModal} column={activeColumn} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <Dialog
        open={deleteColumnModal}
        // TransitionComponent={Transition}
        keepMounted
        onClose={() => setDeleteColumnModal(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{
            color: "black",
            "&:hover": {
              color: "black",
              backgroundColor: "#f1f2f4",
            },
          }} onClick={() => setDeleteColumnModal(false)}>Cancel</Button>
          <Button sx={{
            backgroundColor: "#c9372c", color: "white", "&:hover": {
              color: "white",
              backgroundColor: "#AE2E24",
            },
          }} onClick={handleDeleteColumn}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BoardTemplate;

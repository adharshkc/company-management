import Header from "@components/molecules/Header";
import style from "../../styles/boardTemplate.module.scss";
import { Button } from "@mui/material";
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
} from "@dnd-kit/core";
import { Column } from "types/types";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { useAddColumns } from "../../../hooks/useColumns";

const BoardTemplate = () => {
  const { data: sprint, isLoading } = useFetchStartedSprint();
  const { mutate: addNewColumn } = useAddColumns()
  // console.log(sprint);
  const [columns, setColumns] = useState<Column[]>([]);
  const [newColumn, setNewColumn] = useState<boolean>(false);
  const [newColumnName, setNewColumnName] = useState("");
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const columnOrder = useMemo(
    () => columns.map((col) => col.order),
    [columns]
  );

  useEffect(() => {
    if (sprint) {
      setColumns(sprint.columns);
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
  const handleDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      // console.log(event.active.data)
      return;
    }
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over, collisions } = event;
    console.log(collisions)
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
    console.log(activeColumnIndex);
    console.log(overColumnIndex);
    if (activeColumnIndex !== -1 && overColumnIndex !== -1) {
      // Update columns state after reordering
      setColumns((columns) => arrayMove(columns, activeColumnIndex, overColumnIndex));
    }
  };
  console.log(columns)
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
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
              <Columns column={column} key={column.column_id} />
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
            {activeColumn && <Columns column={activeColumn} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
};

export default BoardTemplate;

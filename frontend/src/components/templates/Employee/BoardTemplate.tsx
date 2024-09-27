import Header from "@components/molecules/Header";
import style from "../../styles/boardTemplate.module.scss";
import { Button } from "@mui/material";
import { theme } from "../../../theme";
import PlusIcon from "../../../assets/icons/PlusIcon";
import { useEffect, useState } from "react";
import { useFetchStartedSprint } from "../../../hooks/useSprints";
import Columns from "@components/organism/Columns/Columns";
import CheckIcon from "../../../assets/icons/CheckIcon";
import CrossIcon from "../../../assets/icons/CrossIcon";
import {DndContext} from "@dnd-kit/core"
import {SortableContext} from "@dnd-kit/sortable"

const BoardTemplate = () => {
  const { data: sprint, isLoading } = useFetchStartedSprint();
  // console.log(sprint.columns)
  const [columns, setColumns] = useState<string[]>([]);
  const [newColumn, setNewColumn] = useState<boolean>(false);
  const [newColumnName, setNewColumnName] = useState("")

  useEffect(() => {
    if (sprint) {
      setColumns(sprint.columns);
    }
  }, [sprint]);

  const handleNewColumn = ()=>{
    if(!newColumnName.trim())return
    
    setColumns((col)=>[...col, newColumnName])
    setNewColumnName("")
    setNewColumn(false)
  }
  console.log(columns)
  if (isLoading) {
    return (
      <div className={style.bodyPart}>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className={style.bodyPart}>
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
      <DndContext>
          <SortableContext>
      <div className={style.ColumnBody}>
        {columns.map((column: string) => (
          <Columns column={column} />
        ))}
        {newColumn ? (
          <div className={style.inputContainer}>
            <input type="text" placeholder="" value={newColumnName} onChange={(e)=>setNewColumnName(e.target.value)}/>
            <div>
              <button className={style.confirm} onClick={handleNewColumn}>
                <CheckIcon />
              </button>
              <button className={style.cancel} onClick={()=>{setNewColumn(false);setNewColumnName("")}}>
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
      </DndContext>
    </div>
  );
};

export default BoardTemplate;

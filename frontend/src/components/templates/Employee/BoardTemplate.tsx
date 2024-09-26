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

const BoardTemplate = () => {
  const { data: sprint, isLoading } = useFetchStartedSprint();
  // console.log(sprint.columns)
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (sprint) {
      setColumns(sprint.columns);
    }
  }, [sprint]);
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
      <div className={style.ColumnBody}>
        {columns.map((column: string) => (
          <Columns column={column} />
        ))}
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
          >
            <PlusIcon />
          </Button>
        </div>
        <div className={style.inputContainer}>
          <input type="text" placeholder="" />
          <div>

          <button className={style.confirm}><CheckIcon/></button>
          <button className={style.cancel}><CrossIcon/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardTemplate;

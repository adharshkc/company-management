import Header from "@components/molecules/Header";
import style from "../../styles/boardTemplate.module.scss";
import { Button } from "@mui/material";
import { theme } from "../../../theme";
import PlusIcon from "../../../assets/icons/PlusIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import { useState } from "react";
import { useFetchSingleSprint } from "../../../hooks/useSprints";

const BoardTemplate = () => {
  const [columns, setColumns] = useState([])
  
  const {data:response} = useFetchSingleSprint()
  console.log(response)
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
          // onClick={addSprint}
        >
          Complete Sprint
        </Button>
      </div>
      <div className={style.ColumnBody}>
        <div className={style.Column}>
          <div className={style.ColumnHeader}>
            <div className={style.columnHeaderName}>
              <h4>Todo</h4>
            </div>
            <div className={style.trashIcon}>
              <TrashIcon />
            </div>
          </div>
          <div className={style.ColumnSection}>
            content
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default BoardTemplate;

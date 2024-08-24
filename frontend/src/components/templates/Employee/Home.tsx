import { Button } from "@components/atoms/button/Button"
import style from "../../styles/EmployeeHomeTemplate.module.scss"
import {theme} from "../../../theme"

const Home = () => {
  return (
    <div className={style.bodyPart}>
        <div className={style.header}>
        <Button
            sx={{
              backgroundColor: theme.palette.primary.dark,
              color: "white",
              marginRight: 4,
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
            // onClick = {()=>setOpenModal(true)}
          >
            Clock In
          </Button>
        </div>
    </div>
  )
}

export default Home
import style  from "../../styles/boardTask.module.scss"

const BoardTask = () => {
  return (
    <div className={style.taskCard}>
    <div className={style.content}>
            <h6 className={style.title}>Update information in footer section</h6>
            <p className={style.subtitle}>KAN-20</p>
        </div>
  </div>
  )
}

export default BoardTask
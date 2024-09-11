import CloseIcon from '@mui/icons-material/Close';
import style from "../../styles/issueDetail.module.scss"

const IssueDetails = () => {
  return (
    <div>
        <div className={style.header}><CloseIcon/></div>
        <h2>Issue Name</h2>
    </div>
  )
}

export default IssueDetails
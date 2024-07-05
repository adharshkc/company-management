import styles from "../../styles/styledSidebar.module.scss";
import logo from "../../../assets/blue logo.png";
import homeIcon from '../../../assets/icons/house-solid 1.svg'
import projectIcon from '../../../assets/icons/project.svg'
import employeesIcon from "../../../assets/icons/employees.svg"
import channelIcon from "../../../assets/icons/hashtag-solid 1.svg"
import { theme } from "../../../theme";
import { Typography } from "../atoms/typography/Typography";
const Sidebar = () => {
  return (
    <div className={styles.sidebar} style={{backgroundColor:theme.palette.primary.dark}}>
      <div className={styles.logoDetails}>
        <img src={logo} height={30} width={30} alt="" />
        <Typography variant="h6" className={styles.logo_name}>
          Codilary
        </Typography>
      </div>
      <div className={styles.line}></div>
      <div className={styles.sideContent}>
        <ul className={styles.nav_links}>
          <li className={styles.liWithFocus}>
            <img src={homeIcon} height={25} alt="" />
            <Typography variant="h6">Dashboard</Typography>
          </li>
        </ul>
        <ul className={styles.nav_links}>
          <li className={styles.liWithoutFocus}>
            <img src={projectIcon} style={{"marginTop":'5px'}} height={25} alt="" />
            <Typography variant="h6" >Projects</Typography>
          </li>
        </ul>
        <ul className={styles.nav_links}>
          <li className={styles.liWithoutFocus}>
            <img src={employeesIcon} height={25} alt="" />
            <Typography variant="h6">Employees</Typography>
          </li>
        </ul>
        <ul className={styles.nav_links}>
          <li className={styles.liWithoutFocus}>
            <img src={channelIcon} height={25} alt="" />
            <Typography variant="h6">Channels</Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

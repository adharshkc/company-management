import styles from "../../styles/styledSidebar.module.scss";
import logo from "../../../assets/Untitled logo.png";
import homeIcon from '../../../assets/icons/house-solid 1.svg'
import { Typography } from "../atoms/typography/Typography";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoDetails}>
        <img src={logo} height={30} width={30} alt="" />
        <Typography variant="h6" className={styles.logo_name}>
          Codilary
        </Typography>
      </div>
      <div className={styles.line}></div>
      <div className={styles.sideContent}>
        <ul className={styles.nav_links}>
          <li>
            <img src={homeIcon} height={25} alt="" />
            <Typography variant="h6">Dashboard</Typography>
          </li>
        </ul>
        <ul className={styles.nav_links}>
          <li>
            <img src={homeIcon} height={25} alt="" />
            <Typography variant="h6">Dashboard</Typography>
          </li>
        </ul>
        <ul className={styles.nav_links}>
          <li>
            <img src={homeIcon} height={25} alt="" />
            <Typography variant="h6">Dashboard</Typography>
          </li>
        </ul>
        <ul className={styles.nav_links}>
          <li className={styles.liWithFocus}>
            <img src={homeIcon} height={25} alt="" />
            <Typography variant="h6">Dashboard</Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

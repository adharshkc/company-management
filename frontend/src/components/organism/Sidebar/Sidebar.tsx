import styles from "../../styles/styledSidebar.module.scss";
import logo from "../../../assets/blue logo.png";
import { theme } from "../../../theme";
import { Typography } from "@components/atoms/typography/Typography";
import { Link, useLocation } from "react-router-dom";
import { SideLayout } from "types/types";

type SidebarProps = {
  layout: SideLayout[];
};

const Sidebar: React.FC<SidebarProps> = ({ layout }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      className={styles.sidebar}
      style={{ backgroundColor: theme.palette.primary.dark }}
    >
      <div className={styles.logoDetails}>
        <img src={logo} height={30} width={30} alt="" />
        <Typography variant="h6" className={styles.logo_name}>
          Codilary
        </Typography>
      </div>
      <div className={styles.line}></div>
      <div className={styles.sideContent}>
        {layout.map((item) => {
          const isFocused = pathname === item.path;
          return (
            <ul className={styles.nav_links} key={item.id}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li
                  className={
                    isFocused ? styles.liWithFocus : styles.liWithoutFocus
                  }
                >
                  <img
                    src={isFocused ? item.darkIcon : item.lightIcon}
                    height={25}
                    alt=""
                  />
                  <Typography variant="h6">{item.name}</Typography>
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

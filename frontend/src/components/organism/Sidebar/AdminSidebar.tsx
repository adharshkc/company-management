import styles from "../../styles/styledSidebar.module.scss";
import logo from "../../../assets/blue logo.png";
import homeIcon from '../../../assets/icons/house-solid 1 (1).svg'
import homeIconDark from '../../../assets/icons/house-solid 1.svg'
import projectIcon from '../../../assets/icons/project.svg'
import projectIconDark from '../../../assets/icons/list-check-solid 1 (1).svg'
import employeesIcon from "../../../assets/icons/employees.svg"
import employeesIconDark from "../../../assets/icons/users-solid 1 (1).svg"
import channelIcon from "../../../assets/icons/hashtag-solid 1.svg"
import channelIconDark from "../../../assets/icons/hashtag-solid 1 (2).svg"
import { theme } from "../../../theme";
import { Typography } from "@components/atoms/typography/Typography"; 
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const AdminSidebar = () => {
  const location = useLocation()
  const {pathname} = location
  const [project, setProject] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [employees, setEmployees] = useState(false)
  const [channel, setChannel] = useState(false)
  const path = pathname.split('/')
  useEffect(()=>{

    if(path[2]==='projects'){
      setDashboard(false)
      setChannel(false)
      setEmployees(false)
      setProject(true)
    }
    if(path[2]===''){
      setChannel(false)
      setEmployees(false)
      setProject(false)
      setDashboard(true)
    }
    if(path[2]==='employees'){
      setChannel(false)
      setEmployees(true)
      setProject(false)
      setDashboard(false)
    }
    if(path[2]==='channel'){
      setChannel(true)
      setEmployees(false)
      setProject(false)
      setDashboard(false)
    }
  },[pathname] )

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
          <Link to={"/admin/"} style={{textDecoration:'none', color:'inherit'}}>
          <li className={dashboard?styles.liWithFocus:styles.liWithoutFocus}>
            <img src={dashboard?homeIconDark:homeIcon} height={25} alt="" />
            <Typography variant="h6">Dashboard</Typography>
          </li>
          </Link>
        </ul>
        <ul className={styles.nav_links}>
          <Link to={"/admin/projects"} style={{textDecoration:'none', color:'inherit'}}>
        <li className={project?styles.liWithFocus:styles.liWithoutFocus}>
            <img src={project?projectIconDark:projectIcon} style={{"marginTop":'5px'}} height={25} alt="" />
            <Typography variant="h6" >Projects</Typography>
          </li>
          </Link>
        </ul>
        <ul className={styles.nav_links}>
          <Link to={"/admin/employees"} style={{textDecoration:'none', color:'inherit'}}>
        <li className={employees?styles.liWithFocus:styles.liWithoutFocus}>
            <img src={employees?employeesIconDark:employeesIcon} height={25} alt="" />
            <Typography variant="h6">Employees</Typography>
          </li>
          </Link>
        </ul>
        <ul className={styles.nav_links}>
          <Link to={"/admin/channels"} style={{textDecoration:'none', color:'inherit'}}>
        <li className={channel?styles.liWithFocus:styles.liWithoutFocus}>
            <img src={channel?channelIconDark:channelIcon} height={25} alt="" />
            <Typography variant="h6">Channels</Typography>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;

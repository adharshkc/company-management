import { Box } from "@mui/material";
import { Typography } from "../../atoms/typography/Typography";
import { SearchInput } from "../../molecules/SearchInput";
import style from "../../styles/styledNavbar.module.scss";
import { useEffect, useState } from "react";
import avatar from "../../../assets/user.png";
import { IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";

type NavbarProps = {
  username: {
    name: string;
  };
};

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  const location = useLocation();
  const { pathname } = location;
  const [title, setTitle] = useState("");

  const date = new Date();
  console.log(date.getTime());
  useEffect(() => {
    if (pathname === "/admin/") {
      setTitle("Dashboard");
    }
    if (pathname === "/admin/projects") {
      setTitle("Projects");
    }
    if (pathname === "/admin/employees") {
      setTitle("Employees");
    }
    if (pathname === "/admin/channels") {
      setTitle("Channels");
    }
  }, [location]);
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className={style.navbar}>
        <Box
          sx={{ flexGrow: 1, padding: "22px" }}
          display="flex"
          justifyContent="space-between"
        >
          <Box display="flex" className={style.rightSide}>
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25 15H3V17H25V15Z" fill="black" />
                <path d="M29 21H3V23H29V21Z" fill="black" />
                <path d="M29 9H3V11H29V9Z" fill="black" />
              </svg>
            </div>
            <Box>
              <Typography
                variant="h6"
                className={style.heading}
                sx={{ marginLeft: "15px" }}
              >
                {title}
                {/* <span className={style.span}>| Good afternoon, {username.name}</span> */}
              </Typography>
            </Box>
          </Box>
          <Box className={style.leftSide}>
            <Box className={style.searchBox}>
              <SearchInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                icon={<IoSearch />}
              />
            </Box>
            <Box className={style.avatarBox}>
              <Typography>{username.name}</Typography>
              <img src={avatar} height={43} alt="" />
            </Box>
          </Box>
        </Box>
        <Box className={style.line}></Box>
      </div>
    </>
  );
};

export default Navbar;

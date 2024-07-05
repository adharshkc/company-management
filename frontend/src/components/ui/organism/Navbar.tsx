import { Box } from "@mui/material";
import { Typography } from "../atoms/typography/Typography";
import { SearchInput } from "../molecules/SearchInput";
import style from "../../styles/styledNavbar.module.scss";
import { useState } from "react";
import avatar from "../../../assets/user.png";

const Navbar = () => {
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
              <Typography variant="h6" sx={{ marginLeft: "15px" }}>
                Dashboard
              </Typography>
            </Box>
          </Box>
          <Box className={style.leftSide}>
            <Box className={style.searchBox}>
              <SearchInput
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Box>
            <Box className={style.avatarBox}>
              <Typography>username</Typography>
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

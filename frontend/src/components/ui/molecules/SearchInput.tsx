import { InputAdornment, SxProps } from "@mui/material";
import { IoSearch } from "react-icons/io5";
import { Input } from "../atoms/input/Input";
import style from "../../styles/styledNavbar.module.scss";
import { BorderAllRounded } from "@mui/icons-material";

type SearchInput = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchInput = ({ inputValue, setInputValue }: SearchInput) => {
  return (
    <>
      <div className={style.search}>
        <input
          type="text"
          className={style.searchTerm}
          placeholder="What are you looking for?"
        />
        <button type="submit" className={style.searchButton}>
          <IoSearch />
          
        </button>
      </div>
    </>
  );
};

import style from "../styles/styledNavbar.module.scss";
import { ReactElement } from "react";

type SearchInput = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  icon: ReactElement;
};

export const SearchInput = ({
  inputValue,
  setInputValue,
  icon,
}: SearchInput) => {
  return (
    <>
      <div className={style.search}>
        <input
          type="text"
          className={style.searchTerm}
          placeholder="What are you looking for?"
        />
        <button type="submit" className={style.searchButton}>
          {icon}
        </button>
      </div>
    </>
  );
};

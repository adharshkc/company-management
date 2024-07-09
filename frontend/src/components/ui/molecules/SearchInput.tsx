
import { IconType } from "react-icons";
import style from "../../styles/styledNavbar.module.scss";

type SearchInput = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  children: IconType 
};

export const SearchInput = ({ inputValue, setInputValue, children }: SearchInput) => {
  return (
    <>
      <div className={style.search}>
        <input
          type="text"
          className={style.searchTerm}
          placeholder="What are you looking for?"
        />
        <button type="submit" className={style.searchButton}>
          {children}
          
        </button>
      </div>
    </>
  );
};

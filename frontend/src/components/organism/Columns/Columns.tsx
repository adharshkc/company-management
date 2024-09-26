import TrashIcon from "../../../assets/icons/TrashIcon";
import style from "../../styles/boardTemplate.module.scss";

type ColumnsProps = {
  column: string;
};

const Columns: React.FC<ColumnsProps> = ({ column }) => {
  return (
    <div className={style.Column}>
      <div className={style.ColumnHeader}>
        <div className={style.columnHeaderName}>
          <h4>{column}</h4>
        </div>
        <div className={style.trashIcon}>
          <TrashIcon />
        </div>
      </div>
      <div className={style.ColumnSection}>content</div>
    </div>
  );
};

export default Columns;

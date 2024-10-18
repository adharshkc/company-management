import { Column } from "../../../types/types";
import TrashIcon from "../../../assets/icons/TrashIcon";
import style from "../../styles/boardTemplate.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type ColumnsProps = {
  column: Column;
  deleteColumn:(column_id:number, bool:boolean)=>void
};

const Columns: React.FC<ColumnsProps> = ({ column, deleteColumn }) => {
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } =
    useSortable({
      id: column.order,
      data: {
        type: "Column",
        column,
      },
    });
  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
    // opacity: isDragging ? 0.5 : 1,
  };

  
  if (isDragging) {
    return (

      <div
        className={style.innerColumn}
        ref={setNodeRef}
        style={styles}
        {...attributes}
        {...listeners}
      ></div>
    )
  }

  return (
    <div
      className={style.Column}
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}
    >

      <div className={style.ColumnHeader}>
        <div className={style.columnHeaderName}>
          <h4>{column.name}</h4>
        </div>
        <div className={style.trashIcon} onClick={()=>deleteColumn(column.column_id, true)}>
          <TrashIcon  />
        </div>
      </div>
      <div className={style.ColumnSection}>content</div>
    </div>
  );
};

export default Columns;

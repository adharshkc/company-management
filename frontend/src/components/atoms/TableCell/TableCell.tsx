import { TableCell as Cell, TableCellBaseProps } from "@mui/material";
import { ElementType, ReactNode } from "react";

type TableCell = {
  children: ReactNode;
  component?: ElementType<TableCellBaseProps, keyof React.JSX.IntrinsicElements>
  scope?: string|undefined
  sx?:object;
  props?: unknown;
};

const TableCell = ({ children, ...props }: TableCell) => {
  return (
    <Cell 
    component={props.component} 
    scope={props.scope}
    sx={props.sx}
    >
      {children}
    </Cell>
  );
};

export default TableCell;

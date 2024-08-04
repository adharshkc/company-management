import { TableRow as Row } from "@mui/material";
import { ReactNode } from "react";

type TableRow = {
  children: ReactNode;
  sx?:object
  props?: unknown;
};

const TableRow = ({ children, ...props }: TableRow) => {
  return <Row hover sx={props.sx}>{children}</Row>;
};

export default TableRow;

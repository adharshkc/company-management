import { TableRow as Row } from "@mui/material";

type TableRow = {
  children: JSX.Element | string|Element[];
  sx?:object
  props?: unknown;
};

const TableRow = ({ children, ...props }: TableRow) => {
  return <Row sx={props.sx}>{children}</Row>;
};

export default TableRow;

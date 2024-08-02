import { TableHead } from "@mui/material";
import TableRow from "../atoms/tableRow/TableRow";
import TableCell from "../atoms/TableCell/TableCell";

type TableHeaderProps={
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    headers: any
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map((header: string, index: number) => (
          <TableCell key={index} component="th" scope='col'>
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );


};

export default TableHeader;

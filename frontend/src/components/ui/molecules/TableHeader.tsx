import { TableHead } from "@mui/material";
import TableRow from "../atoms/tableRow/TableRow";
import TableCell from "../atoms/TableCell/TableCell";

const TableHeader: React.FC = ({ headers }) => {
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

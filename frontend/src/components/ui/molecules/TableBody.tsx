import { TableBody as MUITableBody } from "@mui/material";
import TableRow from "../atoms/tableRow/TableRow";
import TableCell from "../atoms/TableCell/TableCell";
import { Link } from "react-router-dom";

type TableBodyProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: Array<Record<string, any>>;
};

const TableBody = ({ body }: TableBodyProps) => {
  return (
    <MUITableBody>
      {body.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {Object.entries(row).map(([key, value], cellIndex) => (
            <TableCell key={cellIndex}>
              {key === "name" ? (
                <Link to={`/admin/projects/${row.id}`} style={{ textDecoration: "none", color: "#112D4E" }}>
                  {value}
                </Link>
              ) : (
                value
              )}
            </TableCell>
          ))}
          {/* </Link> */}
        </TableRow>
      ))}
    </MUITableBody>
  );
};

export default TableBody;

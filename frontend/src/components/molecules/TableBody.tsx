import { TableBody as MUITableBody } from "@mui/material";
import TableRow from "../atoms/tableRow/TableRow";
import TableCell from "../atoms/TableCell/TableCell";
import { Link } from "react-router-dom";
import { Project } from "types/types";

interface TableBodyProps {
  body: Project[];
  headers: string[];
}

const TableBody = ({ body, headers }: TableBodyProps) => {
  const getValueByHeader = (
    row: Project,
    header: string
  ): string | JSX.Element => {
    switch (header) {
      case "Name":
        return (
          <Link
            to={`/admin/projects/${row.project_id}`}
            style={{ textDecoration: "none", color: "#112D4E" }}
          >
            {row.name}
          </Link>
        );
      case "Team":
        return `${row?.team?.name}`;
      case "Priority":
        return row.priority;
      case "Due Date":
        return new Date(row.startDate).toLocaleDateString();
      default:
        return "";
    }
  };

  return (
    <MUITableBody>
      {body.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {headers.map((header, cellIndex) => (
            <TableCell key={cellIndex}>
              {getValueByHeader(row, header)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MUITableBody>
  );
};

export default TableBody;

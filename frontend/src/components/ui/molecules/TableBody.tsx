import { TableBody as MUITableBody } from "@mui/material"
import TableRow from "../atoms/tableRow/TableRow"
import TableCell from "../atoms/TableCell/TableCell"

const TableBody = ({body}) => {
  return (
    <MUITableBody>
            {data.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {Object.values(row).map((cell, cellIndex) => (
          <TableCell key={cellIndex}>{cell}</TableCell>
        ))}
      </TableRow>
    ))}
    </MUITableBody>
  )
}   

export default TableBody
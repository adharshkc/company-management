import {Table as MUITable, TableContainer} from "@mui/material"
import TableHeader from "../molecules/TableHeader"
import TableBody from "../molecules/TableBody"

const Table = function({headers, body}){
return (
    <TableContainer >
        <MUITable>
            <TableHeader headers = {headers}/>
            <TableBody body={body}/>
        </MUITable>
    </TableContainer>
)
}

export default Table;
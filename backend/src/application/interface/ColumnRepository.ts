import { Column } from "@domain/entities/Column";


export interface ColumnRepository{
    newColumn(colDetails:Column):Promise<any>
    getColumns(project_id:number):Promise<Column[]>
    updateOrder(order:number, column_id:number):Promise<any>
}
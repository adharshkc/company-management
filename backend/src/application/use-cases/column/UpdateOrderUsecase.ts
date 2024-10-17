import { ColumnRepository } from "@application/interface/ColumnRepository";
import { Column } from "@domain/entities/Column";

export class UpdateOrderUsecase {
  constructor(private columnRepository: ColumnRepository) {}
  async execute(active: number, over: number, sprint_id: number) {
    try {
      console.log(active, over, sprint_id);
      const column = await this.columnRepository.getColumnsBySprint(sprint_id);

      console.log(column);
      const activeCol = column.find((col) => col.order === active) as Column;
      const overCol = column.find((col) => col.order === over) as Column;
      const findActiveIndex = column?.indexOf(activeCol);
      const findOverIndex = column?.indexOf(overCol);

      activeCol.order = over;
      if (active > over) {
        for (let i = over - 1; i < active - 1; i++) {
          column[i].order += 1;
        }
      } else {
        for (let i = over - 1; i >= active; i--) {
          column[i].order = i;
        }
      }

      column.splice(findActiveIndex, 1);
      column.push(activeCol);
      const sortedColumns = column.sort((a,b)=>a.order-b.order)
      console.log(sortedColumns);
      const updatedColumns = await this.columnRepository.updateOrder(sortedColumns)


      return {
        status: 200,
        data: {
          success: false,
          updatedColumns,
        },
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

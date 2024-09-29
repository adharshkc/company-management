import { ColumnRepository } from "@application/interface/ColumnRepository";
import { Column } from "@domain/entities/Column";

export class NewColumnUsecase {
  constructor(private columnRepository: ColumnRepository) {}
  async execute(column: Column) {
    try {
      const newColumn = await this.columnRepository.newColumn(column);
      return {
        status:200,
        data:{
            success:true,
            newColumn
        }
      }
    } catch (error:any) {
        throw new Error(error)
    }
  }
}

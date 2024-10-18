import { ColumnRepository } from "@application/interface/ColumnRepository";


export class DeleteColumnUsecase {
    constructor(private columnRepository:ColumnRepository){}

    async execute(column_id: number) {
        try {
          const columns = await this.columnRepository.deleteColumn(column_id);
          return {
            status: 200,
            data: {
              success: true,
              columns,
            },
          };
        } catch (error: any) {
          throw new Error(error);
        }
      }
}
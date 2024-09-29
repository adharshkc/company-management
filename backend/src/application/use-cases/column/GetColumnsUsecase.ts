import { ColumnRepository } from "@application/interface/ColumnRepository";

export class GetColumnsUsecase {
  constructor(private columnRepository: ColumnRepository) {}

  async execute(project_id: number) {
    try {
      const columns = await this.columnRepository.getColumns(project_id);
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

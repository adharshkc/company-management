import { ColumnRepository } from "@application/interface/ColumnRepository";

export class UpdateOrderUsecase {
  constructor(private columnRepository: ColumnRepository) {}
  async execute(order: number, sprint_id: number) {
    try {
      const column = await this.columnRepository.updateOrder(order, sprint_id);
      return {
        status: 200,
        data: {
          success: false,
          column,
        },
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

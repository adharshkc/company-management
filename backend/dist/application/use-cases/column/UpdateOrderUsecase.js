"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderUsecase = void 0;
class UpdateOrderUsecase {
    constructor(columnRepository) {
        this.columnRepository = columnRepository;
    }
    async execute(order, over, sprint_id) {
        try {
            const column = await this.columnRepository.getSingleColumn(sprint_id);
            console.log(column);
            // return {
            //   status: 200,
            //   data: {
            //     success: false,
            //     column,
            //   },
            // };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.UpdateOrderUsecase = UpdateOrderUsecase;

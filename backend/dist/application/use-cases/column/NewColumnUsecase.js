"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewColumnUsecase = void 0;
class NewColumnUsecase {
    constructor(columnRepository) {
        this.columnRepository = columnRepository;
    }
    async execute(column) {
        try {
            const newColumn = await this.columnRepository.newColumn(column);
            return {
                status: 200,
                data: {
                    success: true,
                    newColumn
                }
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.NewColumnUsecase = NewColumnUsecase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetColumnsUsecase = void 0;
class GetColumnsUsecase {
    constructor(columnRepository) {
        this.columnRepository = columnRepository;
    }
    async execute(project_id) {
        try {
            const columns = await this.columnRepository.getColumns(project_id);
            return {
                status: 200,
                data: {
                    success: true,
                    columns,
                },
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.GetColumnsUsecase = GetColumnsUsecase;

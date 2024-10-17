"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderUsecase = void 0;
class UpdateOrderUsecase {
    constructor(columnRepository) {
        this.columnRepository = columnRepository;
    }
    async execute(active, over, sprint_id) {
        try {
            console.log(active, over, sprint_id);
            const column = await this.columnRepository.getColumnsBySprint(sprint_id);
            console.log(column);
            const activeCol = column.find((col) => col.order === active);
            const overCol = column.find((col) => col.order === over);
            const findActiveIndex = column === null || column === void 0 ? void 0 : column.indexOf(activeCol);
            const findOverIndex = column === null || column === void 0 ? void 0 : column.indexOf(overCol);
            activeCol.order = over;
            if (active > over) {
                for (let i = over - 1; i < active - 1; i++) {
                    column[i].order += 1;
                }
            }
            else {
                for (let i = over - 1; i >= active; i--) {
                    column[i].order = i;
                }
            }
            column.splice(findActiveIndex, 1);
            column.push(activeCol);
            const sortedColumns = column.sort((a, b) => a.order - b.order);
            console.log(sortedColumns);
            const updatedColumns = await this.columnRepository.updateOrder(sortedColumns);
            return {
                status: 200,
                data: {
                    success: false,
                    updatedColumns,
                },
            };
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.UpdateOrderUsecase = UpdateOrderUsecase;

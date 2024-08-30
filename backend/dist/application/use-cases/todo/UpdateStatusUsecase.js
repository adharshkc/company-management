"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusUsecase = void 0;
class UpdateStatusUsecase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async execute(todoId, userId) {
        try {
            const allTodos = await this.todoRepository.updateStatus(todoId, userId);
            console.log(allTodos);
            if (allTodos) {
                return {
                    status: 200,
                    data: {
                        success: true,
                        todos: allTodos,
                    },
                };
            }
            return {
                status: 404,
                data: {
                    success: false,
                    message: "todo not found",
                },
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.UpdateStatusUsecase = UpdateStatusUsecase;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodoUsecase = void 0;
class DeleteTodoUsecase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async execute(todoId, userId) {
        try {
            const deletedTodo = await this.todoRepository.deleteTodo(todoId, userId);
            if (deletedTodo) {
                return {
                    status: 200,
                    data: {
                        success: true,
                        todos: deletedTodo
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
exports.DeleteTodoUsecase = DeleteTodoUsecase;

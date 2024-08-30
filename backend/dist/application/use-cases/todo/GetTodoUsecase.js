"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTodoUsecase = void 0;
class GetTodoUsecase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async execute(user_id) {
        try {
            const todos = await this.todoRepository.getTodo(user_id);
            if (todos) {
                return {
                    status: 200,
                    data: {
                        success: true,
                        todos: todos,
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
exports.GetTodoUsecase = GetTodoUsecase;

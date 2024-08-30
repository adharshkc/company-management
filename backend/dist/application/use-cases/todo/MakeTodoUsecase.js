"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeTodoUsecase = void 0;
class MakeTodoUsecase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async execute(todo, user_id) {
        console.log(todo);
        try {
            todo.userId = user_id;
            const newTodo = await this.todoRepository.createTodo(todo);
            if (newTodo) {
                return {
                    status: 200,
                    data: {
                        success: true,
                        todos: newTodo
                    },
                };
            }
            return {
                status: 500,
                data: {
                    message: "error creating todo",
                },
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.MakeTodoUsecase = MakeTodoUsecase;

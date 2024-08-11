"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoUseCase = void 0;
class TodoUseCase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async makeTodo(todo, user_id) {
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
    async getTodo(user_id) {
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
    async updateStatus(todoId, userId) {
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
    async deleteTodo(todoId, userId) {
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
exports.TodoUseCase = TodoUseCase;

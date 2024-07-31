"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoUseCase = void 0;
class TodoUseCase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    makeTodo(todo, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(todo);
            try {
                todo.userId = user_id;
                const newTodo = yield this.todoRepository.createTodo(todo);
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
        });
    }
    getTodo(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield this.todoRepository.getTodo(user_id);
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
        });
    }
    updateStatus(todoId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allTodos = yield this.todoRepository.updateStatus(todoId, userId);
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
        });
    }
    deleteTodo(todoId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedTodo = yield this.todoRepository.deleteTodo(todoId, userId);
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
        });
    }
}
exports.TodoUseCase = TodoUseCase;

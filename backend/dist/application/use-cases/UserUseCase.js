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
exports.UserUseCase = void 0;
class UserUseCase {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    makeTodo(todo, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                todo.userId = user_id;
                const newTodo = yield this.todoRepository.createTodo(todo);
                if (newTodo) {
                    return {
                        status: 200,
                        data: {
                            success: true
                        }
                    };
                }
                return {
                    status: 500,
                    data: {
                        message: 'internal server error'
                    }
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
                console.log(todos);
                if (todos) {
                    return {
                        status: 200,
                        data: {
                            success: true,
                            todos
                        }
                    };
                }
            }
            catch (error) {
            }
        });
    }
}
exports.UserUseCase = UserUseCase;

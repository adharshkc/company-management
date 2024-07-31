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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeTodoRepository = void 0;
const TodoModel_1 = __importDefault(require("@infrastructure/models/TodoModel"));
class SequelizeTodoRepository {
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(todo);
            try {
                const newTodo = yield TodoModel_1.default.create({
                    todo: todo.todo,
                    status: todo.status,
                    userId: todo.userId
                });
                if (newTodo) {
                    const todos = yield TodoModel_1.default.findAll({ where: { userId: todo.userId }, raw: true });
                    return todos;
                }
                return null;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getTodo(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield TodoModel_1.default.findAll({ where: { userId: userId }, raw: true });
                return todos;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateStatus(todoId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todo = yield TodoModel_1.default.update({ status: "done" }, { where: { todo_id: todoId } });
                console.log("todo", todo);
                const allTodos = yield TodoModel_1.default.findAll({ where: { userId: userId }, raw: true });
                return allTodos;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    deleteTodo(todoId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield TodoModel_1.default.destroy({ where: { todo_id: todoId } });
                const todo = yield TodoModel_1.default.findAll({ where: { userId: 1 }, raw: true });
                return todo;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.SequelizeTodoRepository = SequelizeTodoRepository;

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
const Todo_1 = require("@domain/entities/Todo");
const TodoModel_1 = __importDefault(require("@infrastructure/models/TodoModel"));
class SequelizeTodoRepository {
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(todo);
                const newTodo = yield TodoModel_1.default.create({
                    todo: todo.todo,
                    status: todo.status,
                    userId: todo.userId
                });
                if (newTodo) {
                    return new Todo_1.Todo(newTodo.todo, newTodo.status, newTodo.userId, newTodo.todo_id);
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
                const todos = yield TodoModel_1.default.findAll({ where: { userId: 1 }, raw: true });
                return todos;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.SequelizeTodoRepository = SequelizeTodoRepository;

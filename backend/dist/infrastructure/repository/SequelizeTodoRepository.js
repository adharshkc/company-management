"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeTodoRepository = void 0;
const TodoModel_1 = __importDefault(require("@infrastructure/models/TodoModel"));
class SequelizeTodoRepository {
    async createTodo(todo) {
        console.log(todo);
        try {
            const newTodo = await TodoModel_1.default.create({
                todo: todo.todo,
                status: todo.status,
                userId: todo.userId
            });
            if (newTodo) {
                const todos = await TodoModel_1.default.findAll({ where: { userId: todo.userId }, raw: true });
                return todos;
            }
            return null;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getTodo(userId) {
        try {
            const todos = await TodoModel_1.default.findAll({ where: { userId: userId }, raw: true });
            return todos;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateStatus(todoId, userId) {
        try {
            const todo = await TodoModel_1.default.update({ status: "done" }, { where: { todo_id: todoId } });
            console.log("todo", todo);
            const allTodos = await TodoModel_1.default.findAll({ where: { userId: userId }, raw: true });
            return allTodos;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async deleteTodo(todoId, userId) {
        try {
            await TodoModel_1.default.destroy({ where: { todo_id: todoId } });
            const todo = await TodoModel_1.default.findAll({ where: { userId: 1 }, raw: true });
            return todo;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeTodoRepository = SequelizeTodoRepository;

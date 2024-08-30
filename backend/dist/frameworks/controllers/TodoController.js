"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
class TodoController {
    constructor(makeTodo, getTodo, updateStatus, deleteTodo) {
        this.makeTodo = makeTodo;
        this.getTodo = getTodo;
        this.updateStatus = updateStatus;
        this.deleteTodo = deleteTodo;
    }
    async addTodo(req, res, next) {
        try {
            const todo = req.body;
            console.log(todo);
            if (!todo)
                return res.status(400).json("body is missing");
            const payload = req.commonId;
            const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
            const result = await this.makeTodo.execute(todo, parseInt(userId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async todo(req, res, next) {
        try {
            const payload = req.commonId;
            const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
            const result = await this.getTodo.execute(parseInt(userId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async changeStatus(req, res, next) {
        try {
            const payload = req.commonId;
            const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
            const todoId = req.params.id;
            console.log(todoId);
            const result = await this.updateStatus.execute(parseInt(todoId), parseInt(userId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async todoDelete(req, res, next) {
        try {
            const payload = req.commonId;
            const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
            const todoId = req.params.id;
            const result = await this.deleteTodo.execute(parseInt(todoId), parseInt(userId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.TodoController = TodoController;

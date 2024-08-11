"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
class TodoController {
    constructor(makeTodo) {
        this.todoUseCase = makeTodo;
    }
    async makeTodo(req, res, next) {
        try {
            const todo = req.body;
            console.log(todo);
            if (!todo)
                return res.status(400).json("body is missing");
            const payload = req.commonId;
            const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
            const result = await this.todoUseCase.makeTodo(todo, parseInt(userId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async getTodo(req, res, next) {
        try {
            const payload = req.commonId;
            const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
            const result = await this.todoUseCase.getTodo(parseInt(userId));
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
            const result = await this.todoUseCase.updateStatus(parseInt(todoId), parseInt(userId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteTodo(req, res, next) {
        try {
            const payload = req.commonId;
            const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
            const todoId = req.params.id;
            const result = await this.todoUseCase.deleteTodo(parseInt(todoId), parseInt(userId));
            res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.TodoController = TodoController;

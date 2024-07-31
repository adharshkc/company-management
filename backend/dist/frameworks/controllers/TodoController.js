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
exports.TodoController = void 0;
class TodoController {
    constructor(makeTodo) {
        this.todoUseCase = makeTodo;
    }
    makeTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todo = req.body;
                console.log(todo);
                if (!todo)
                    return res.status(400).json("body is missing");
                const payload = req.commonId;
                const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
                const result = yield this.todoUseCase.makeTodo(todo, parseInt(userId));
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.commonId;
                const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
                const result = yield this.todoUseCase.getTodo(parseInt(userId));
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    changeStatus(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.commonId;
                const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
                const todoId = req.params.id;
                console.log(todoId);
                const result = yield this.todoUseCase.updateStatus(parseInt(todoId), parseInt(userId));
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.commonId;
                const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
                const todoId = req.params.id;
                const result = yield this.todoUseCase.deleteTodo(parseInt(todoId), parseInt(userId));
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TodoController = TodoController;

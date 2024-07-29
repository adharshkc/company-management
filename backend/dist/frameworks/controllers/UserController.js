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
exports.UserController = void 0;
class UserController {
    constructor(makeTodo) {
        this.userUserCase = makeTodo;
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
                console.log(userId);
                const result = yield this.userUserCase.makeTodo(todo, parseInt(userId));
                res.status(result.status).json(result.data);
                console.log(result);
            }
            catch (error) {
                next(error);
                console.log(error);
            }
        });
    }
    getTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = req.commonId;
                const userId = payload === null || payload === void 0 ? void 0 : payload.commonId;
                const result = yield this.userUserCase.getTodo(parseInt(userId));
                console.log(result);
            }
            catch (error) {
            }
        });
    }
}
exports.UserController = UserController;

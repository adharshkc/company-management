"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwtVerify_1 = require("@frameworks/middlewares/authentication/jwtVerify");
const userDI_1 = require("@di/userDI");
const router = (0, express_1.Router)();
router.post("/todo", jwtVerify_1.VerifyCommonAccess, userDI_1.todoController.addTodo.bind(userDI_1.todoController));
router.get("/todos", jwtVerify_1.VerifyCommonAccess, userDI_1.todoController.todo.bind(userDI_1.todoController));
router.put("/todo/update/:id", jwtVerify_1.VerifyCommonAccess, userDI_1.todoController.changeStatus.bind(userDI_1.todoController));
router.delete("/todo/delete/:id", jwtVerify_1.VerifyCommonAccess, userDI_1.todoController.todoDelete.bind(userDI_1.todoController));
exports.default = router;

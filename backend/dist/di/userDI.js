"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const DeleteTodoUsecase_1 = require("@application/use-cases/todo/DeleteTodoUsecase");
const GetTodoUsecase_1 = require("@application/use-cases/todo/GetTodoUsecase");
const MakeTodoUsecase_1 = require("@application/use-cases/todo/MakeTodoUsecase");
const UpdateStatusUsecase_1 = require("@application/use-cases/todo/UpdateStatusUsecase");
const TodoController_1 = require("@frameworks/controllers/TodoController");
const SequelizeTodoRepository_1 = require("@infrastructure/repository/SequelizeTodoRepository");
const todoRepository = new SequelizeTodoRepository_1.SequelizeTodoRepository();
const makeTodoUsecase = new MakeTodoUsecase_1.MakeTodoUsecase(todoRepository);
const getTodoUsecase = new GetTodoUsecase_1.GetTodoUsecase(todoRepository);
const updateStatusUsecase = new UpdateStatusUsecase_1.UpdateStatusUsecase(todoRepository);
const deleteTodoUsecase = new DeleteTodoUsecase_1.DeleteTodoUsecase(todoRepository);
const todoController = new TodoController_1.TodoController(makeTodoUsecase, getTodoUsecase, updateStatusUsecase, deleteTodoUsecase);
exports.todoController = todoController;

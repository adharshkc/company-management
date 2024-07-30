import { Router } from "express";
import { VerifyCommonAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { TodoUseCase } from "@application/use-cases/TodoUseCase";
import { TodoController } from "@frameworks/controllers/TodoController";
import { SequelizeTodoRepository } from "@infrastructure/repository/SequelizeTodoRepository";



const router = Router()
















const todoRepository = new SequelizeTodoRepository()
const todoUsercase = new TodoUseCase(todoRepository)
const todoController = new TodoController(todoUsercase)


router.post('/todo', VerifyCommonAccess, todoController.makeTodo.bind(todoController))
router.get('/todos', VerifyCommonAccess, todoController.getTodo.bind(todoController))
router.put('/todo/update/:id', VerifyCommonAccess, todoController.changeStatus.bind(todoController))
router.delete('/todo/delete/:id', VerifyCommonAccess, todoController.deleteTodo.bind(todoController))

export default router
import { Router } from "express";
import { VerifyCommonAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { UserUseCase } from "@application/use-cases/UserUseCase";
import { SequelizeTodoRepository } from "@infrastructure/repository/SequelizeTodoRepository";
import { UserController } from "@frameworks/controllers/UserController";



const router = Router()
















const todoRepository = new SequelizeTodoRepository()
const todoUsercase = new UserUseCase(todoRepository)
const userController = new UserController(todoUsercase)


router.post('/todo', VerifyCommonAccess, userController.makeTodo.bind(userController))
router.get('/todos', VerifyCommonAccess, userController.getTodo.bind(userController))

export default router
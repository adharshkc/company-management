import { DeleteTodoUsecase } from "@application/use-cases/todo/DeleteTodoUsecase";
import { GetTodoUsecase } from "@application/use-cases/todo/GetTodoUsecase";
import { MakeTodoUsecase } from "@application/use-cases/todo/MakeTodoUsecase";
import { UpdateStatusUsecase } from "@application/use-cases/todo/UpdateStatusUsecase";
import { TodoController } from "@frameworks/controllers/TodoController";
import { SequelizeTodoRepository } from "@infrastructure/repository/SequelizeTodoRepository";




const todoRepository = new SequelizeTodoRepository();
const makeTodoUsecase = new MakeTodoUsecase(todoRepository);
const getTodoUsecase = new GetTodoUsecase(todoRepository)
const updateStatusUsecase = new UpdateStatusUsecase(todoRepository)
const deleteTodoUsecase = new DeleteTodoUsecase(todoRepository)
const todoController = new TodoController(makeTodoUsecase,getTodoUsecase, updateStatusUsecase, deleteTodoUsecase );

export {todoController}
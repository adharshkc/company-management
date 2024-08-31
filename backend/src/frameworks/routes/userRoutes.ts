import { Router } from "express";
import { VerifyCommonAccess } from "@frameworks/middlewares/authentication/jwtVerify";
import { todoController } from "@di/userDI";

const router = Router();


router.post(
  "/todo",
  VerifyCommonAccess,
  todoController.addTodo.bind(todoController)
);
router.get(
  "/todos",
  VerifyCommonAccess,
  todoController.todo.bind(todoController)
);
router.put(
  "/todo/update/:id",
  VerifyCommonAccess,
  todoController.changeStatus.bind(todoController)
);
router.delete(
  "/todo/delete/:id",
  VerifyCommonAccess,
  todoController.todoDelete.bind(todoController)
);

export default router;

import { Todo } from "@domain/entities/Todo";
import { TodoRepository } from "@application/interface/TodoRepository";
import TodoModel from "@infrastructure/models/TodoModel";

export class SequelizeTodoRepository implements TodoRepository {
  async createTodo(todo: Todo): Promise<Todo | null> {
    try {
      
      console.log(todo)
      const newTodo = await TodoModel.create({
        todo: todo.todo,
        status: todo.status,
        userId: todo.userId
      });
      if (newTodo) {
        return new Todo(
          newTodo.todo,
          newTodo.status,
          newTodo.userId,
          newTodo.todo_id
        );
      }
      return null
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async getTodo(userId: number){
    try {
      const todos = await TodoModel.findAll({where: {userId: 1}, raw: true})
      return todos
    } catch (error) {
      throw new Error(error as string)
    }
  }
}

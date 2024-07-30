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
    } catch (error:any) {
      throw new Error(error)
    }
  }

  async getTodo(){
    try {
      const todos = await TodoModel.findAll({where: {userId: 1}, raw: true})
      return todos
    } catch (error:any) {
      throw new Error(error)
    }
  }
  
  async updateStatus(todoId: number): Promise<Todo | null> {
    try {
      const todo = await TodoModel.findOne({where: {todo_id: todoId}})
      todo?.update({status: "done"})
      todo?.save()
      return todo
    } catch (error: any) {
      throw new Error(error)
    }
  }
 async deleteTodo(todoId: number): Promise<number | null> {
    try {
      const todo = await TodoModel.destroy({where: {todo_id: todoId}})
      console.log(todo)
      return todo
    } catch (error:any) {
      throw new Error(error)
    }
  }
}

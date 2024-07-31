import { Todo } from "@domain/entities/Todo";
import { TodoRepository } from "@application/interface/TodoRepository";
import TodoModel from "@infrastructure/models/TodoModel";

export class SequelizeTodoRepository implements TodoRepository {
  async createTodo(todo: Todo): Promise<Todo []| null> {
    console.log(todo)
    try {
      const newTodo = await TodoModel.create({
        todo: todo.todo,
        status: todo.status,
        userId: todo.userId
      });
      if (newTodo) {
        const todos = await TodoModel.findAll({where: {userId: todo.userId}, raw: true})
        return todos
      }
      return null
    } catch (error:any) {
      throw new Error(error)
    }
  }

  async getTodo(userId:number){
    try {
      const todos = await TodoModel.findAll({where: {userId: userId}, raw: true})
      return todos
    } catch (error:any) {
      throw new Error(error)
    }
  }
  
  async updateStatus(todoId: number, userId: number): Promise<Todo[] | null> {
    try {
    const todo=  await TodoModel.update({ status: "done" }, { where: { todo_id: todoId } });
     console.log("todo",todo)
      const allTodos = await TodoModel.findAll({where: {userId: userId}, raw: true})
      return allTodos
    } catch (error: any) {
      throw new Error(error)
    }
  }
 async deleteTodo(todoId: number, userId: number): Promise<Todo[] | null> {
    try {
      await TodoModel.destroy({where: {todo_id: todoId}})
      const todo = await TodoModel.findAll({where: {userId: 1}, raw: true})
      return todo
    } catch (error:any) {
      throw new Error(error)
    }
  }
}

"use strict";
// import { TodoRepository } from "@application/interface/TodoRepository";
// import { UserRepository } from "@application/interface/UserRepository";
// import { Todo } from "@domain/entities/Todo";
// export class UserUseCase {
//   private todoRepository: TodoRepository;
//   constructor(todoRepository: TodoRepository) {
//     this.todoRepository = todoRepository;
//   }
//   async makeTodo(todo: Todo, user_id: number) {
//     try {
//       todo.userId = user_id;
//       const newTodo = await this.todoRepository.createTodo(todo);
//       if (newTodo) {
//         return {
//           status: 200,
//           data: {
//             success: true,
//           },
//         };
//       }
//       return {
//         status: 500,
//         data: {
//           message: "internal server error",
//         },
//       };
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   }
//   async getTodo(user_id: number) {
//     try {
//       const todos = await this.todoRepository.getTodo(user_id);
//       console.log(todos);
//       if (todos) {
//         return {
//           status: 200,
//           data: {
//             success: true,
//             todos,
//           },
//         };
//       }
//       return {
//         status: 500,
//         data: {
//           message: "internal server error",
//         },
//       };
//     } catch (error: any) {
//       throw new Error(error.message);
//     }
//   }
// }

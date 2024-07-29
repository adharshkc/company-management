export interface ITodo{
    todo_id?: number
    todo: string
    status: string
    userId: number
}

export class Todo implements ITodo {
  todo_id?: number;
  todo: string;
  status: "pending" | "done";
  userId: number;

  constructor(
      todo: string,
      status: "pending" | "done",
      userId: number,
      todo_id?: number,
  ) {
    this.todo_id = todo_id;
    this.todo = todo;
    this.status = status;
    this.userId = userId;
  }
}

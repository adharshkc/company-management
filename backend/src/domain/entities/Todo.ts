export interface ITodo {
  todo_id?: number;
  todo: string;
  status: string;
  userId?: number|null;
}

export class Todo implements ITodo {
  todo_id?: number;
  todo: string;
  status: string
  userId: number;

  constructor(
    todo: string,
    status: string,
    userId: number,
    todo_id?: number|undefined
  ) {
    this.todo_id = todo_id;
    this.todo = todo;
    this.status = status;
    this.userId = userId;
  }
}

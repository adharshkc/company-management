"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(todo, status, userId, todo_id) {
        this.todo_id = todo_id;
        this.todo = todo;
        this.status = status;
        this.userId = userId;
    }
}
exports.Todo = Todo;

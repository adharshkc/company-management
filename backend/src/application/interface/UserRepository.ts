import { Todo } from "@domain/entities/Todo";
import { User } from "@domain/entities/User";

export interface UserRepository{
    getUser(userId: number):Promise<User|null>
}
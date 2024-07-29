export class User{
    user_id?: number;
    role: string
    constructor(role: string, user_id: number){
        this.role = role
        this.user_id = user_id
    }
}
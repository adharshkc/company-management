import { Hr } from "@domain/entities/Hr"

export interface HrRepository{
    checkHr(email:string):Promise<Hr|null>
    hrLogin(email: string):Promise<any>

}
import { IEmployee } from "@domain/entities/Employee";

export interface EmployeeRepository{
    checkEmployee(email:string):Promise<IEmployee|null>
}
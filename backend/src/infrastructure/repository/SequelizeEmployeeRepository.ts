import { EmployeeRepository } from "@application/interface/EmployeeRepository";
import { IEmployee } from "@domain/entities/Employee";
import EmployeeModel from "@infrastructure/models/EmployeeModel";



export class SequelizeEmployeeRepository implements EmployeeRepository{
  
    async checkEmployee(email: string): Promise<IEmployee | null> {
        try {
            const employee = await EmployeeModel.findOne({where:{email}})
            return employee
        } catch (error:any) {
            throw new Error(error)
        }
    }
}
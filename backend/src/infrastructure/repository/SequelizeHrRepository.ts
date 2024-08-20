import { HrRepository } from "@application/interface/HrRepository";
import { IEmployee } from "@domain/entities/Employee";
import { Hr } from "@domain/entities/Hr";
import EmployeeModel from "@infrastructure/models/EmployeeModel";
import HrModel from "@infrastructure/models/HrModel";
import UserModel from "@infrastructure/models/UserModel";

export class SequelizeHrRepository implements HrRepository {
  async checkHr(email: string): Promise<Hr | null> {
    try {
      const response = await HrModel.findOne({ where: { email } });
      if (response) {
        return response;
      }
      return null;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async saveOtp(otp: string, id: number): Promise<any> {
    try {
      await HrModel.update({ otp: otp }, { where: { hr_id: id } });
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async hrLogin(email: string): Promise<any> {
    return null;
  }
  async getHr(hr_id: number): Promise<Hr | null> {
    try {
      const response = await HrModel.findOne({ where: { hr_id: hr_id } });
      if (response) {
        return response;
      }
      return null;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async addEmployee(data: IEmployee): Promise<IEmployee | null> {
    try {
      const newEmployee = await UserModel.create({ role: data.role });
      console.log(newEmployee)
      if (newEmployee) {
        try {
          const result = await EmployeeModel.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            joiningDate: data.startDate,
            user_id: newEmployee.user_id,
            role: data.role,
            team_id: data.team_id,
          });
          console.log(result)
          return result;
        } catch (error) {
          console.log(error)
          throw new Error
        }
      } else {
        throw new Error("Error creating user");
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async checkEmployee(email: string): Promise<string | null | undefined> {
    try {
      const employee = await EmployeeModel.findOne({ where: { email: email } });
      return employee?.email;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

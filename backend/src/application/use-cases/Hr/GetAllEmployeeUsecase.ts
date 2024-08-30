import { HrRepository } from "@application/interface/HrRepository";

export class GetAllEmployeesUsecase {
  constructor(private hrRepository: HrRepository) {}
  async execute() {
    try {
      const employees = await this.hrRepository.getEmployees();
      if (employees) {
        return {
          status: 200,
          data: {
            success: true,
            employees,
          },
        };
      }
      return {
        status: 500,
        data: {
          success: false,
          message: "could not retrieve the data",
        },
      };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

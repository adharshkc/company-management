"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllEmployees = void 0;
class GetAllEmployees {
    constructor(hrRepository) {
        this.hrRepository = hrRepository;
    }
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
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.GetAllEmployees = GetAllEmployees;

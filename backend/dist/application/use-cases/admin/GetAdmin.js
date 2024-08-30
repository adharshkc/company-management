"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAdmin = void 0;
class GetAdmin {
    constructor(adminRepository) {
        this.adminRepository = adminRepository;
    }
    async execute(adminId) {
        try {
            const admin = await this.adminRepository.getAdmin(adminId);
            console.log(admin);
            return {
                status: 200,
                data: {
                    success: true,
                    admin,
                },
            };
        }
        catch (error) {
            console.log("admin not found", error.message);
            throw new Error(error.message);
        }
    }
}
exports.GetAdmin = GetAdmin;

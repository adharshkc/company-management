import { AdminRepository } from "@application/interface/AdminRepository";



export class GetAdminUsecase{
    constructor(private adminRepository:AdminRepository){}

    async execute(adminId:number){
        try {
            const admin = await this.adminRepository.getAdmin(adminId);
            return {
              status: 200,
              data: {
                success: true,
                admin,
              },
            };
          } catch (error: any) {
            console.log("admin not found", error.message);
            throw new Error(error.message);
          }
    }
}
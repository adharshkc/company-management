import { AdminRepository } from "@application/interface/AdminRepository";



export class GetAdmin{
    constructor(private adminRepository:AdminRepository){}

    async execute(adminId:number){
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
          } catch (error: any) {
            console.log("admin not found", error.message);
            throw new Error(error.message);
          }
    }
}
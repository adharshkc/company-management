// import { AdminRepository } from "@domain/repository/AdminRepository";
import { Admin } from "@domain/entities/Admin";
import { AdminRepository } from "./interface/AdminRepository";


// export class LoginAdmin{
//     constructor(private adminRepository: AdminRepository){

//     }

//     async execute(email: string, password: string){
//         const admin = await this.adminRepository.findByEmail(email)
//         console.log(admin)
//     }
// }


export class AdminUsecase implements AdminRepository{
    adminLogin(email: string, password: string): Promise<Admin | null> {
        
        throw new Error("Method not implemented.");
    }
    
}
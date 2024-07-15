import { AdminRepository } from "@domain/repository/AdminRepository";


export class LoginAdmin{
    constructor(private adminRepository: AdminRepository){

    }

    async execute(email: string, password: string){
        const admin = await this.adminRepository.findByEmail(email)
        console.log(admin)
    }
}
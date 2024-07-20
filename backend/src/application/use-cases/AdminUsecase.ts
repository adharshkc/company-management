import { Admin } from "@domain/entities/Admin";
import { AdminRepository, HashPassword } from "../interface/AdminRepository";
import { TokenRepository } from "@application/interface/TokenRepository";

export class AdminUsecase {
  private adminRepository: AdminRepository;
  private hashPassword: HashPassword;
  private createToken : TokenRepository
  constructor(adminRepository: AdminRepository, hashPassword: HashPassword, createToken: TokenRepository) {
    this.hashPassword = hashPassword
    this.adminRepository = adminRepository;
    this.createToken = createToken;
  }
  async adminLogin(email:string, password: string) {
    try {
      const admin = await this.adminRepository.adminLoginCheck(email);
      if (admin) {
        const matchedPassword = await this.hashPassword.compare(password, admin.password)
        if (matchedPassword) {
          const role = 'admin'
          const token = await this.createToken.create(admin.adminId, role)
          console.log(token)
          return {
            status: 200,
            data: {
                success: true,
                admin,
                token
            }
        } as const;
        } else {
          return {
            status: 401,
            data: {
              success: false,
              message: "incorrect passowrd"
            }
          } as const
        }
      } else {
        return {
          status: 401,
          data: {
            success: false,
            message: "admin not found"
          }
        }as const
      }
    } catch (error:any) {
      console.log("admin not found", error.message);
      throw new Error(error.message);
    }
  }
}

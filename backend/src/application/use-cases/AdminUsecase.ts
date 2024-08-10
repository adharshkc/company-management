import { Admin } from "@domain/entities/Admin";
import { AdminRepository, HashPassword } from "../interface/AdminRepository";
import { TokenRepository } from "@application/interface/TokenRepository";
import { Hr } from "@domain/entities/Hr";

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
          const accessToken = await this.createToken.createAccessToken(admin.adminId,admin.userId, role)
          const refreshToken = await this.createToken.createRefreshToken(admin.adminId, role)
          console.log()
          return {
            status: 200,
            data: {
                success: true,
                admin,
                accessToken,
                refreshToken
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

  async getAdmin(adminId:number){
    try{
      const admin = await this.adminRepository.getAdmin(adminId)
      console.log(admin)
      return {
        status: 200,
        data:{
          success: true,
          admin
        }
      }
    }catch (error:any) {
      console.log("admin not found", error.message);
      throw new Error(error.message);
    }
  }
  async addHr(data:Hr){
    try {
      const hr = await this.adminRepository.addHr(data)
      console.log(hr)
    } catch (error) {
      
    }
  }
}

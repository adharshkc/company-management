import {
  AdminRepository,
  HashPassword,
} from "@application/interface/AdminRepository";
import { TokenRepository } from "@application/interface/TokenRepository";

export class AdminLoginUsecase {
  constructor(
    private adminRepository: AdminRepository,
   private hashPassword: HashPassword,
   private tokenRepository: TokenRepository
  ){};

  async execute(email: string, password: string) {
    const admin = await this.adminRepository.adminLoginCheck(email);
    if (!admin) {
      throw new Error("Admin not found");
    }

    const isPasswordMatched = await this.hashPassword.compare(
      password,
      admin.password
    );

    if (!isPasswordMatched) {
      throw new Error("Incorrect password");
    }

    const accessToken = await this.tokenRepository.createAccessToken(
      admin.adminId,
      admin.userId,
      "admin"
    );

    return {
        status: 200,
        data: {
          success: true,
          admin,
          accessToken,
          // refreshToken,
        },
      }
  }
}

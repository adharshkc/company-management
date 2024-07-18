// import { AdminRepository } from "@domain/repository/AdminRepository";
import { Admin } from "@domain/entities/Admin";
import { AdminRepository } from "../interface/AdminRepository";
import bcrypt from "bcrypt";

export class AdminUsecase {
  private adminRepository: AdminRepository;
  constructor(adminRepository: AdminRepository) {
    this.adminRepository = adminRepository;
  }
  async adminLogin(email: string, password: string): Promise<Admin | null> {
    try {
      const admin = await this.adminRepository.adminLoginCheck(email);
      if (admin) {
        const hashedPassword = await bcrypt.compare(password, admin.password);
        if (hashedPassword) {
          return admin;
        } else {
          console.log("password is incorrect");
          return null;
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log("admin not found", error);
      return null;
    }
  }
}

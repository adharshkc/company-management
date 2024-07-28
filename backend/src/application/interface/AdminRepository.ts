import { Admin } from "@domain/entities/Admin";

export interface AdminRepository {
  adminLoginCheck(email: string): Promise<Admin | null>;
  getAdmin(adminId:number):Promise<Admin|null>
}

export interface HashPassword{
  compare(password: string, hashedPassword: string):Promise<boolean>;
}
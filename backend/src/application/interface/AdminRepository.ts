import { Admin } from "@domain/entities/Admin";
import { Hr } from "@domain/entities/Hr";

export interface AdminRepository {
  adminLoginCheck(email: string): Promise<Admin | null>;
  getAdmin(adminId:number):Promise<Admin|null>
  addHr(data:Hr):Promise<Hr|null>
}

export interface HashPassword{
  compare(password: string, hashedPassword: string):Promise<boolean>;
}
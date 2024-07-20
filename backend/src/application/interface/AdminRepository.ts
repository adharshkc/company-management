import { Admin } from "@domain/entities/Admin";

export interface AdminRepository {
  adminLoginCheck(email: string): Promise<Admin | null>;
  // adminLogin(email: string, password: string): Promise<Admin | null>;
}

export interface HashPassword{
  compare(password: string, hashedPassword: string):Promise<boolean>;
}
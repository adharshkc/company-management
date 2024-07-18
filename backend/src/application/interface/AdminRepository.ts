import { Admin } from "@domain/entities/Admin";

export interface AdminRepository {
  adminLoginCheck(email: string): Promise<Admin | null>;
  // adminLogin(email: string, password: string): Promise<Admin | null>;
}

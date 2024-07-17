import { Admin } from "@domain/entities/Admin";

export interface AdminRepository {
  adminLogin(email: string, password: string): Promise<Admin | null>;
}

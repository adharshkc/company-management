import { Admin } from "@domain/entities/Admin";

// import { AdminRepository } from "@domain/repository/AdminRepository";
import { AdminRepository } from "@application/interface/AdminRepository";

import AdminModel from "@infrastructure/models/AdminModel";

export class SequelizeAdminRepository implements AdminRepository {
  async adminLoginCheck(email: string): Promise<Admin | null> {
   
    const admin = await AdminModel.findOne({ where: { email } });

    console.log(admin, "admin");
    if(admin){

      return new Admin(
        admin.name,
        admin.email,
        admin.password,
        admin.dob,
        admin.gender,
        admin.phone,
        admin.userId,
        admin.admin_id,
      );
    }
    return null
  }

  async getAdmin(adminId: number): Promise<Admin | null> {
    const admin = await AdminModel.findOne({where: {admin_id: adminId}})
    if(admin){
      return new Admin(
        admin.name,
        admin.email,
        admin.password,
        admin.dob,
        admin.gender,
        admin.phone,
        admin.userId,
        admin.admin_id,
      )
    }
    return null
  }
}

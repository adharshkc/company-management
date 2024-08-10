import { Admin } from "@domain/entities/Admin";

// import { AdminRepository } from "@domain/repository/AdminRepository";
import { AdminRepository } from "@application/interface/AdminRepository";

import AdminModel from "@infrastructure/models/AdminModel";
import { Hr } from "@domain/entities/Hr";
import UserModel from "@infrastructure/models/UserModel";
import HrModel from "@infrastructure/models/HrModel";

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
  async addHr(data: Hr): Promise<Hr | null> {
   try {
     console.log(data)
     const newHr = await UserModel.create({role:'hr'})
     console.log("new Hr: ", newHr)
     if(newHr){
       const result = await HrModel.create({
        name:data.name,
        email:data.email,
        phone:data.phone,
        joiningDate: data.startDate,
        user_id: newHr.user_id
       })
       console.log("result",result)
       return result
     }else{
      throw new Error("Error creating user")
     }
   } catch (error:any) {
    console.log(error)
    throw new Error(error)
   }
  }
}

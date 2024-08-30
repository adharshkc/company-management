"use strict";
// import { Admin } from "@domain/entities/Admin";
// import { AdminRepository, HashPassword } from "../interface/AdminRepository";
// import { TokenRepository } from "@application/interface/TokenRepository";
// import { Hr } from "@domain/entities/Hr";
// import { MailerRepository } from "@application/interface/MailerRepository";
// export class AdminUsecase {
//   private adminRepository: AdminRepository;
//   private hashPassword: HashPassword;
//   private createToken: TokenRepository;
//   private nodeMailer: MailerRepository;
//   constructor(
//     adminRepository: AdminRepository,
//     hashPassword: HashPassword,
//     createToken: TokenRepository,
//     nodeMailer: MailerRepository
//   ) {
//     this.hashPassword = hashPassword;
//     this.adminRepository = adminRepository;
//     this.createToken = createToken;
//     this.nodeMailer = nodeMailer;
//   }
//   async adminLogin(email: string, password: string) {
//     try {
//       const admin = await this.adminRepository.adminLoginCheck(email);
//       if (admin) {
//         const matchedPassword = await this.hashPassword.compare(
//           password,
//           admin.password
//         );
//         if (matchedPassword) {
//           const role = "admin";
//           const accessToken = await this.createToken.createAccessToken(
//             admin.adminId,
//             admin.userId,
//             role
//           );
//           // const refreshToken = await this.createToken.createRefreshToken(
//           //   admin.adminId,
//           //   role
//           // );
//           console.log();
//           return {
//             status: 200,
//             data: {
//               success: true,
//               admin,
//               accessToken,
//               // refreshToken,
//             },
//           } as const;
//         } else {
//           return {
//             status: 401,
//             data: {
//               success: false,
//               message: "incorrect passowrd",
//             },
//           } as const;
//         }
//       } else {
//         return {
//           status: 401,
//           data: {
//             success: false,
//             message: "admin not found",
//           },
//         } as const;
//       }
//     } catch (error: any) {
//       console.log("admin not found", error.message);
//       throw new Error(error.message);
//     }
//   }
//   async getAdmin(adminId: number) {
//     try {
//       const admin = await this.adminRepository.getAdmin(adminId);
//       console.log(admin);
//       return {
//         status: 200,
//         data: {
//           success: true,
//           admin,
//         },
//       };
//     } catch (error: any) {
//       console.log("admin not found", error.message);
//       throw new Error(error.message);
//     }
//   }
//   async addHr(data: Hr) {
//     try {
//       const existingHr = await this.adminRepository.checkHr(data.email)
//       if(existingHr){
//         throw new Error("Hr Already exists")
//       }else{
//         const hr = await this.adminRepository.addHr(data);
//         if (hr) {
//           const role = "hr";
//           const accessToken = await this.createToken.createAccessToken(
//             hr.hr_id,
//             hr.user_id,
//             role
//           );
//           const from = "codilary.solutions@gmail.com";
//           const to = hr.email;
//           const subject = "Welcome mail";
//           const html = `
//     <p>Welcome <strong>${hr.name}</strong> to Codilary!</p>
//     <p>Please click the link below to verify your email address:</p>
//     <a href="http://localhost:3000/verify?token=${accessToken}">Verify Email</a>
//     <p>If you did not request this email, please ignore it.</p>
//   `;
//           this.nodeMailer.sendMail(from, to, subject, html);
//         }
//         return {
//           status: 200,
//           data: {
//             success: true,
//             hr,
//           },
//         };
//       }
//     } catch (error) {
//       throw new Error((error as Error).message);
//     }
//   }
// }

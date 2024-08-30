"use strict";
// import { ProjectRepository } from "@application/interface/ProjectRepository";
// import { Project } from "@domain/entities/Project";
// export class ProjectUsecase {
//   private projectRepository: ProjectRepository;
//   constructor(projectRepository: ProjectRepository) {
//     this.projectRepository = projectRepository;
//   }
//   async createProject(projectDetails: Project) {
//    try {
//      const newProject = await this.projectRepository.createProject(
//        projectDetails
//      );
//      console.log(newProject)
//      if (newProject) {
//        return {
//          status: 200,
//          data: {
//            success: true,
//            newProject,
//          },
//        } as const;
//      } else {
//        return {
//          status: 500,
//          data: {
//            success: false,
//            message: "Error creating project",
//          },
//        } as const;
//      }
//    } catch (error:any) {
//     console.log(error)
//     throw new Error(error.message)
//    }
//   }
//   async getProjects(){
//     try {
//       const response = await this.projectRepository.getProjects()
//       if(response){
//         return {
//           status: 200,
//           data: {
//             success: true,
//             projects: response
//           }
//         }
//       }else{
//         return {status:   404, data: {success: false}
//         }
//       }
//     } catch (error:any) {
//       throw new Error(error.message)
//     }
//   }
// }

import { ProjectUsecase } from "@application/use-cases/ProjectUsecase";
import { NextFunction, Request, Response } from "express";



export class ProjectController{
    private projectUsecase :ProjectUsecase;
    constructor(projectUsecase: ProjectUsecase){
        this.projectUsecase = projectUsecase
    }

    async createProject (req:Request, res:Response, next:NextFunction){
        // const project = req.body;
        const project = {
            name:req.body.name,
            priority:req.body.priority,
            team_id: parseInt(req.body.team_id),
            startDate: req.body.startDate
        }
        console.log("eke", project)
        try {
            const result = await this.projectUsecase.createProject(project)
            res.status(result.status).json(result.data)
        } catch (error) {
            next(error)
        }
        

    }
    async getProjects(req: Request, res: Response, next:NextFunction){
        try {
            const result = await this.projectUsecase.getProjects()
            console.log(result)
            res.status(result.status).json(result.data)
        } catch (error) {
            next(error)
        }
    }
}
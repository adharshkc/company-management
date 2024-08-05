import { ProjectUsecase } from "@application/use-cases/ProjectUsecase";
import { NextFunction, Request, Response } from "express";



export class ProjectController{
    private projectUsecase :ProjectUsecase;
    constructor(projectUsecase: ProjectUsecase){
        this.projectUsecase = projectUsecase
    }

    async createProject (req:Request, res:Response, next:NextFunction){
        console.log("respnse")
        // const project = req.body;
        const project = {
            name:req.body.name,
            priority:req.body.priority,
            team_id: parseInt(req.body.team),
            dueDate: req.body.dueDate
        }
        try {
            const result = await this.projectUsecase.createProject(project)
            res.status(result.status).json(result.data)
        } catch (error) {
            next(error)
        }
        

    }
}
import { SprintUsecase } from "@application/use-cases/SprintUsecase";
import { NextFunction, Request, Response } from "express";




export class SprintController {
    private sprintUsecase : SprintUsecase
    constructor(sprintUsecase:SprintUsecase){
        this.sprintUsecase= sprintUsecase
    }

   async createSprint(req:Request, res:Response, next:NextFunction){
        try {
            
            const sprint = {
                name: req.body.name,
                startDate:req.body.startDate,
                endDate:req.body.endDate,
                status:req.body.status,
                project_id:req.body.project_id
            }

            const {status, data} = await this.sprintUsecase.createSprint(sprint)
            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    }
}
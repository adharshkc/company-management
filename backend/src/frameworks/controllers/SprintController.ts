
import { AddSprintUsecase } from "@application/use-cases/sprint/AddSprintUsecase";
import { NextFunction, Request, Response } from "express";




export class SprintController {
    constructor(private addSprint:AddSprintUsecase){
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

            const {status, data} = await this.addSprint.execute(sprint)
            res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    }
}
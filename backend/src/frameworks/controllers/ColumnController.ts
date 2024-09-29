
import { GetColumnsUsecase, NewColumnUsecase } from "@application/use-cases/column";
import { NextFunction, Request, Response } from "express";



export class ColumnController {
    constructor(private newColumnUsecase:NewColumnUsecase, private getColumnUsecase:GetColumnsUsecase){}
    async newColumn(req:Request, res:Response, next:NextFunction){
        try {
            const column = req.body
            const {status, data} = await this.newColumnUsecase.execute(column)
            return res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    } 
    async getColumns(req:Request, res:Response, next:NextFunction){
        try {
            const projectId = req.params.projectId
            const {status, data} = await this.getColumnUsecase.execute(parseInt(projectId))
            return res.status(status).json(data)
        } catch (error) {
            next(error)
        }
    }
}
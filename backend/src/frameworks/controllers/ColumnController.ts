import {
  GetColumnsUsecase,
  NewColumnUsecase,
  UpdateOrderUsecase,
} from "@application/use-cases/column";
import { NextFunction, Request, Response } from "express";

export class ColumnController {
  constructor(
    private newColumnUsecase: NewColumnUsecase,
    private getColumnUsecase: GetColumnsUsecase,
    private updateOrderUsecase: UpdateOrderUsecase
  ) {}
  async newColumn(req: Request, res: Response, next: NextFunction) {
    try {
      const column = req.body.newColumn;
      console.log(column);
      const { status, data } = await this.newColumnUsecase.execute(column);
      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }
  async getColumns(req: Request, res: Response, next: NextFunction) {
    try {
      const projectId = req.params.projectId;
      const { status, data } = await this.getColumnUsecase.execute(
        parseInt(projectId)
      );
      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  }

  async updateColumn(req: Request, res: Response, next: NextFunction) {
    try {
      const active = req.body.active;
      const over = req.body.over
      const sprint_id = req.body.sprint_id;
      if (!sprint_id) res.status(400).json("sprint id is empty");
     const {status, data} = await this.updateOrderUsecase.execute(
        parseInt(active),
        parseInt(over),
        parseInt(sprint_id)
      );
      return res.status(status).json(data)
    } catch (error) {
      next(error);
    }
  }
}

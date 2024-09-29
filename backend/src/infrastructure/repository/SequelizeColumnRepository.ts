import { ColumnRepository } from "@application/interface/ColumnRepository";
import { Column } from "@domain/entities/Column";
import ColumnModel from "@infrastructure/models/ColumnModel";
import SprintModel from "@infrastructure/models/SprintModel";

export class SequelizeColumnRepository implements ColumnRepository {
  async newColumn(colDetails: Column): Promise<any> {
    try {
      const newColumn = await ColumnModel.create({
        name: colDetails.name,
        order: colDetails.order,
        sprint_id: colDetails.sprint_id,
      });
      return newColumn;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getColumns(project_id: number): Promise<Column[]> {
    try {
      const sprint = await SprintModel.findOne({
        where: { project_id: project_id, status: "pending" },
      });
      const columns = await ColumnModel.findAll({
        where: { sprint_id: sprint?.sprint_id },
      });
      return columns;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

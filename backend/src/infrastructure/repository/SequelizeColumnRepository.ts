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

  async updateOrder(columns:Column[]): Promise<any> {
    try {
      for(const col of columns){

         await ColumnModel.update(
          {
            name:col.name,
            order:col.order,
            sprint_id:col.sprint_id
          },
          {
            where:{column_id:col.column_id}
          }
         );
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async getSingleColumn(sprint_id: number): Promise<Column | null> {
    try {
      const columns = await ColumnModel.findOne({
        where: { sprint_id: sprint_id },
      });
      return columns;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getColumnsBySprint(sprint_id: number): Promise<Column[]> {
    try {
      const columns = await ColumnModel.findAll({
        where: { sprint_id: sprint_id },
        raw:true
      });
      return columns;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteColumn(column_id: number): Promise<any> {
      try {
        const column = await ColumnModel.destroy({where:{column_id:column_id}})
        return column
      } catch (error:any) {
        throw new Error(error);
      }
  }
}

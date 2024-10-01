import { GetColumnsUsecase, NewColumnUsecase, UpdateOrderUsecase } from "@application/use-cases/column";
import { ColumnController } from "@frameworks/controllers/ColumnController";
import { SequelizeColumnRepository } from "@infrastructure/repository/SequelizeColumnRepository";



const columnRepository = new SequelizeColumnRepository()
const columnUsecase = new NewColumnUsecase(columnRepository)
const getColumnsUsecase = new GetColumnsUsecase(columnRepository)
const updateOrderUsecase = new UpdateOrderUsecase(columnRepository)
const columnController = new ColumnController(columnUsecase,getColumnsUsecase, updateOrderUsecase )

export {columnController}
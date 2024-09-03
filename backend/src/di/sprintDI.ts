import { AddSprintUsecase } from "@application/use-cases/sprint/AddSprintUsecase";
import { GetSprintUsecase } from "@application/use-cases/sprint/GetSprintUsecase";
import { SprintController } from "@frameworks/controllers/SprintController";
import { SequelizeSprintRepository } from "@infrastructure/repository/SequelizeSprintRepository";





const sprintRepository = new SequelizeSprintRepository()
const addSprintUsecase = new AddSprintUsecase(sprintRepository)
const getSprintUsecase = new GetSprintUsecase(sprintRepository)
const sprintController = new SprintController(addSprintUsecase, getSprintUsecase)


export {sprintController}
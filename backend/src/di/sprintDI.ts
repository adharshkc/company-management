import { AddSprintUsecase } from "@application/use-cases/sprint/AddSprintUsecase";
import { SprintController } from "@frameworks/controllers/SprintController";
import { SequelizeSprintRepository } from "@infrastructure/repository/SequelizeSprintRepository";





const sprintRepository = new SequelizeSprintRepository()
const addSprintUsecase = new AddSprintUsecase(sprintRepository)
const sprintController = new SprintController(addSprintUsecase)


export {sprintController}
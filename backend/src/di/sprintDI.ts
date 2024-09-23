import { AddSprintUsecase } from "@application/use-cases/sprint/AddSprintUsecase";
import { DeleteSprintUsecase } from "@application/use-cases/sprint/DeleteSprintUsecase";
import { GetSprintUsecase } from "@application/use-cases/sprint/GetSprintUsecase";
import { GetStartedSprintUsecase } from "@application/use-cases/sprint/GetStartedSprintUsecase";
import { UpdateSprintUsecase } from "@application/use-cases/sprint/UpdateSprintUsecase";
import { SprintController } from "@frameworks/controllers/SprintController";
import { SequelizeSprintRepository } from "@infrastructure/repository/SequelizeSprintRepository";

const sprintRepository = new SequelizeSprintRepository();
const addSprintUsecase = new AddSprintUsecase(sprintRepository);
const getSprintUsecase = new GetSprintUsecase(sprintRepository);
const updateSprintUsecase = new UpdateSprintUsecase(sprintRepository);
const deleteSprintUsecase = new DeleteSprintUsecase(sprintRepository);
const getStartedSprintUsecase = new GetStartedSprintUsecase(sprintRepository);
const sprintController = new SprintController(
  addSprintUsecase,
  getSprintUsecase,
  updateSprintUsecase,
  deleteSprintUsecase,
  getStartedSprintUsecase
);

export { sprintController };

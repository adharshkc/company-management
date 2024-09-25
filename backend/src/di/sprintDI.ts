import { SprintController } from "@frameworks/controllers/SprintController";
import { SequelizeSprintRepository } from "@infrastructure/repository/SequelizeSprintRepository";
import {
  AddSprintUsecase,
  DeleteSprintUsecase,
  GetSprintUsecase,
  GetStartedSprintUsecase,
  StartSprintUsecase,
  UpdateSprintUsecase,
} from "@application/use-cases/sprint";

const sprintRepository = new SequelizeSprintRepository();
const addSprintUsecase = new AddSprintUsecase(sprintRepository);
const getSprintUsecase = new GetSprintUsecase(sprintRepository);
const updateSprintUsecase = new UpdateSprintUsecase(sprintRepository);
const deleteSprintUsecase = new DeleteSprintUsecase(sprintRepository);
const getStartedSprintUsecase = new GetStartedSprintUsecase(sprintRepository);
const changeStatusUsecase = new StartSprintUsecase(sprintRepository);
const sprintController = new SprintController(
  addSprintUsecase,
  getSprintUsecase,
  updateSprintUsecase,
  deleteSprintUsecase,
  getStartedSprintUsecase,
  changeStatusUsecase
);

export { sprintController };

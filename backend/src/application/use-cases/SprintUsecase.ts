import { SprintRepository } from "@application/interface/SprintRepository";



export class SprintUsecase{
    private sprintRepository:SprintRepository;
    constructor(sprintRepository:SprintRepository){
        this.sprintRepository = sprintRepository
    }
    async createSprint
}
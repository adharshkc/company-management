"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeamUsecase = void 0;
class CreateTeamUsecase {
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    async execute(name) {
        try {
            const team = await this.teamRepository.addTeam(name);
            return {
                status: 200,
                data: {
                    success: true,
                    team,
                },
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.CreateTeamUsecase = CreateTeamUsecase;

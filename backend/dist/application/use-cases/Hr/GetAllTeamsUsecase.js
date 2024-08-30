"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTeamsUsecase = void 0;
class GetAllTeamsUsecase {
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    async execute() {
        try {
            const teams = await this.teamRepository.getTeams();
            return {
                status: 200,
                data: {
                    success: true,
                    teams,
                },
            };
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.GetAllTeamsUsecase = GetAllTeamsUsecase;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeTeamRepository = void 0;
const TeamModel_1 = __importDefault(require("@infrastructure/models/TeamModel"));
class SequelizeTeamRepository {
    async addTeam(name) {
        try {
            const newTeam = await TeamModel_1.default.create({ name: name });
            return newTeam;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getTeams() {
        try {
            const teams = await TeamModel_1.default.findAll();
            return teams;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SequelizeTeamRepository = SequelizeTeamRepository;

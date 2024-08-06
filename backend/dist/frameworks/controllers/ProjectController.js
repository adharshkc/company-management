"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
class ProjectController {
    constructor(projectUsecase) {
        this.projectUsecase = projectUsecase;
    }
    createProject(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("respnse");
            // const project = req.body;
            const project = {
                name: req.body.name,
                priority: req.body.priority,
                team_id: parseInt(req.body.team),
                dueDate: req.body.dueDate
            };
            try {
                const result = yield this.projectUsecase.createProject(project);
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProjects(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.projectUsecase.getProjects();
                console.log(result);
                res.status(result.status).json(result.data);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ProjectController = ProjectController;

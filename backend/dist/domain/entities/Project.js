"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(name, priority, team_id, startDate, projectId) {
        this.name = name;
        this.priority = priority;
        this.team_id = team_id;
        this.startDate = startDate;
        this.projectId = projectId;
    }
}
exports.Project = Project;

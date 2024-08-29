"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sprint = void 0;
class Sprint {
    constructor(name, startDate, endDate, status, sprint_id, project_id) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.sprint_id = sprint_id;
        this.project_id = project_id;
    }
}
exports.Sprint = Sprint;

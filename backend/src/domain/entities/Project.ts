export interface IProject {
  name: string;
  priority: string;
  team_id: number;
  startDate: Date;
  project_id?: number;
}

export class Project implements IProject {
  name: string;
  priority: string;
  team_id: number;
  startDate: Date;
  projectId?: number;
  constructor(
    name: string,
    priority: string,
    team_id: number,
    startDate: Date,
    projectId?: number
  ) {
    this.name = name;
    this.priority = priority;
    this.team_id = team_id;
    this.startDate = startDate;
    this.projectId = projectId;
  }
}


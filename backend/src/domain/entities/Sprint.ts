

interface ISprint {
  name: string;
  startDate?: Date;
  endDate?: Date;
  status?: 'start'|'completed'|'pending';
  sprint_id?: number;
  project_id?: number;
  //future issues
  //future comments
}

export class Sprint implements ISprint {
  name: string;
  startDate?: Date;
  endDate?: Date;
  status?: 'start'|'completed'|'pending'
  project_id?: number | undefined;
  sprint_id?: number | undefined;
  constructor(
    name: string,
    startDate?: Date,
    endDate?: Date,
    status?: 'start'|'completed'|'pending',
    sprint_id?:number,
    project_id?:number
  ) {
    this.name = name
    this.startDate= startDate
    this.endDate = endDate
    this.status = status
    this.sprint_id= sprint_id
    this.project_id=project_id
  }
}

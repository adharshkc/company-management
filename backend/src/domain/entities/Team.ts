export interface ITeam {
  name: string;
  team_id?: number;
  // teamLead?:string
  // teamMembers?:string[]
}

export class Team implements ITeam {
  name: string;
  team_id?: number | undefined;
  constructor(name: string, team_id: number) {
    this.name = name;
    this.team_id = team_id;
  }
}

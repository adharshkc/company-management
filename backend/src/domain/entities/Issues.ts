export interface IIssues {
  name: string;
  status: string;
  description?: string;
  issue_id?: number | null;
}

export class Issues implements IIssues {
  name: string;
  status: string;
  description?: string;
  issue_id?: number | null;

  constructor(
    name: string,
    status: string,
    description?: string,
    issue_id?: number | null
  ) {
    this.name = name;
    this.status = status;
    this.description = description;
    this.issue_id = issue_id;
  }
}

export interface IEmployee {
  name: string;
  email: string;
  phone: string;
  role: string;
  employee_id?: number;
  user_id?: number;
  startDate?: Date;
  team_id?: number;
}

export class Employee implements IEmployee {
  name: string;
  email: string;
  phone: string;
  role: string;
  employee_id?: number;
  user_id?: number;
  startDate?: Date;
  team_id?: number;
  constructor(
    name: string,
    email: string,
    phone: string,
    role: string,
    employee_id?: number,
    user_id?: number,
    startDate?: Date,
    team_id?: number
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.employee_id = employee_id;
    this.user_id = user_id;
    this.startDate = startDate;
    team_id = team_id;
  }
}

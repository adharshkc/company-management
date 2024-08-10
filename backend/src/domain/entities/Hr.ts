export interface IHr {
  name: string;
  email: string;
  phone: string;
  hr_id?: number;
  user_id?: number;
  startDate?: Date;
}

export class Hr implements IHr {
  name: string;
  email: string;
  phone: string;
  hr_id?: number;
  startDate?: Date;
  user_id?: number;
  constructor(
    name: string,
    email: string,
    phone: string,
    hr_id?: number,
    user_id?: number,
    startDate?: Date
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.hr_id = hr_id;
    this.user_id = user_id;
    this.startDate = startDate;
  }
}

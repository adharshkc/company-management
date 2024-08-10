export interface IHr {
  name: string;
  email: string;
  phone: string;
  hr_id?: number;
}

export class Hr implements IHr {
  name: string;
  email: string;
  phone: string;
  password?: string;
  hr_id?: number;
  constructor(
    name: string,
    email: string,
    phone: string,
    hr_id?: number
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.hr_id = hr_id;
  }
}

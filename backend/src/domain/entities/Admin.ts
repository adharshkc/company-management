export class Admin {
  adminId?: number;
  name: string;
  email: string;
  password: string;
  dob: Date;
  gender: string;
  phone: string;
  userId: number
  role?: number| string
  constructor(
    name: string,
    email: string,
    password: string,
    dob: Date,
    gender: string,
    phone: string,
    userId: number,
    adminId?: number,
    role?: number| string
  ) {
    this.adminId = adminId;
    this.name = name;
    this.email = email;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
    this.phone = phone;
    this.userId = userId
    this.role = role
  }
}

export interface AdminProps{
    adminId ?: number
    name: string;
    email: string;
    password: string;
    dob: Date;
    gender: string;
    phone: string;
}


export class Admin{
    adminId ?: number
    name: string;
    email: string;
    password: string;
    dob: Date;
    gender: string;
    phone: string;
    constructor({adminId, name, email, password, dob, gender, phone}:AdminProps){
        this.adminId= adminId;
        this.name= name
        this.email = email
        this.password = password
        this.dob = dob
        this.gender = gender;
        this.phone = phone
    }
}
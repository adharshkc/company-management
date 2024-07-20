"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
class Admin {
    constructor(name, email, password, dob, gender, phone, adminId, role) {
        this.adminId = adminId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.dob = dob;
        this.gender = gender;
        this.phone = phone;
        this.role = role;
    }
}
exports.Admin = Admin;

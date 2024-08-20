"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, email, phone, role, employee_id, user_id, startDate, team_id) {
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
exports.Employee = Employee;

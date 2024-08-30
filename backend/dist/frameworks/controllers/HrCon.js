"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrCon = void 0;
class HrCon {
    constructor(hrLoginUsecase, hrVerifyOtpUsecase, getHrUsecase, createEmployeeUsecase, getAllEmployeesUsecase, getAllTeamsUsecase, createTeamUsecase) {
        this.hrLoginUsecase = hrLoginUsecase;
        this.hrVerifyOtpUsecase = hrVerifyOtpUsecase;
        this.getHrUsecase = getHrUsecase;
        this.createEmployeeUsecase = createEmployeeUsecase;
        this.getAllEmployeesUsecase = getAllEmployeesUsecase;
        this.getAllTeamsUsecase = getAllTeamsUsecase;
        this.createTeamUsecase = createTeamUsecase;
    }
    async hrLogin(req, res, next) {
        try {
            const { email } = req.body;
            console.log(req.body);
            const response = await this.hrLoginUsecase.execute(email);
            return res.status(response.status).json(response.data);
        }
        catch (error) {
            next(error);
        }
    }
    async verifyOtp(req, res, next) {
        try {
            const { email, otp } = req.body;
            const result = await this.hrVerifyOtpUsecase.execute(otp, email);
            //  res.cookie('hrToken', result.data.refreshToken,{
            //   httpOnly:true,
            //   sameSite:'strict',
            //   secure:process.env.NODE_ENV ==='PRODUCTION',
            //   maxAge: 24 * 60 * 60 * 1000,
            //   path:'/'
            //  })
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async getHr(req, res, next) {
        try {
            const payload = req.hr;
            const hr_id = payload.userId;
            const result = await this.getHrUsecase.execute(parseInt(hr_id));
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async addEmployee(req, res, next) {
        try {
            const data = req.body;
            console.log("requested");
            const result = await this.createEmployeeUsecase.execute(data);
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async getEmployees(req, res, next) {
        try {
            const result = await this.getAllEmployeesUsecase.execute();
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async createTeam(req, res, next) {
        try {
            const name = req.body.name;
            console.log(req.body);
            const result = await this.createTeamUsecase.execute(name);
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
    async getTeams(req, res, next) {
        try {
            const result = await this.getAllTeamsUsecase.execute();
            return res.status(result.status).json(result.data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.HrCon = HrCon;

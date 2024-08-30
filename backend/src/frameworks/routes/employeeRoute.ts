import { employeeController } from "@di/employeeDI";
import { verifyEmployeeAccessToken } from "@frameworks/middlewares/authentication/employeeMiddleware";
import { Router } from "express";

const employeeRouter = Router();

employeeRouter.post("/login", employeeController.login.bind(employeeController));
employeeRouter.post(
  "/verify-otp",
  employeeController.otpVerify.bind(employeeController)
);
employeeRouter.get(
  "/check-session",
  verifyEmployeeAccessToken,
  employeeController.checkSession.bind(employeeController)
);

export default employeeRouter
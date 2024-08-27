import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
declare global {
  namespace Express {
    interface Request {
      employee_id: string;
      commonId: string;
      employee: JwtPayload|undefined|string;
    }
  }
}

const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;

export const verifyEmployeeAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.header("Authorization");
  if (!authorization) return next(createError.Unauthorized());
  const bearerToken = authorization.split(" ");
  const token = bearerToken[1];
  if (jwtAccessSecret) {
    jwt.verify(token, jwtAccessSecret, (err, payload) => {
      if (err) {
        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
        return next(createError.Unauthorized(message));
      }
      console.log(payload)
      req.employee = payload ;
      next()
    });
  }
};

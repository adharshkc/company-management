import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
declare global {
  namespace Express {
    interface Request {
      hrId: string;
      commonId: string;
      hr: JwtPayload|undefined|string;
    }
  }
}

const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;

export const verifyHrAccessToken = (
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
      req.hr = payload ;
    });
  }
};

export const verifyHrRefreshToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const refreshToken = req.cookies.refreshToken;
  //   console.log("token", refreshToken);
  if (!refreshToken) return next(createError.Unauthorized());
  if (jwtRefreshSecret) {
    jwt.verify(refreshToken, jwtRefreshSecret, (err: any, payload: any) => {
      if (err) {
        console.log(err.message);
        const message =
          err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
        return next(createError.Unauthorized(message));
      }
      console.log(payload);
      req.hr = payload as string;
      next();
    });
  }
};

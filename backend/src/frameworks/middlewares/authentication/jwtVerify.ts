import { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import jwt from "jsonwebtoken";

declare global{
    namespace Express{
        interface Request{
            adminId: string
            commonId: string
        }
    }
}

const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;

export const verifyAdminAccess = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header("Authorization");
  if (!authorization) return next(createError.Unauthorized());
  const bearerToken = authorization.split(" ");
  const token = bearerToken[1];
  if (jwtAccessSecret) {
    jwt.verify(token, jwtAccessSecret, (err, payload) => {
      if (err) {
        const message = err.name==='JsonWebTokenError'?'Unauthorized': err.message
        return next(createError.Unauthorized(message))
      }
      req.adminId = payload as string;
      next();
    });
  }
};


export const VerifyCommonAccess = (req: Request, res: Response, next: NextFunction)=>{
  const authorization = req.header("Authorization");
  console.log(authorization)
  if (!authorization) return next(createError.Unauthorized());
  const bearerToken = authorization.split(" ");
  const token = bearerToken[1];
  if (jwtAccessSecret) {
    jwt.verify(token, jwtAccessSecret, (err, payload) => {
      if (err) {
        console.log(err)
        const message = err.name==='JsonWebTokenError'?'Unauthorized': err.message
        return next(createError.Unauthorized(message))
      }
      req.commonId = payload as string;
      next();
    });
  }
}


export const verifyAdminRefresh = (refreshToken: string) =>{
  return new Promise((resolve, reject)=>{
    jwt.verify(refreshToken, jwtAccessSecret as string, (err, payload)=>{
      if(err) return reject(createError.Unauthorized())
         resolve(payload)
    })
  })
}
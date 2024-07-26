import { NextFunction, Response } from "express";
import createError from "http-errors";
import jwt from "jsonwebtoken";
import { CustomRequest } from "@frameworks/utils/customRequest";

const jwtAccessSecret = process.env.JWT_ACCESS_TOKEN

export const verifyAdminAccess = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authorization = req.header("authorization");
  if (!authorization) return next(createError.Unauthorized());
  const bearerToken = authorization.split(" ");
  const token = bearerToken[1];
  if(jwtAccessSecret){

      jwt.verify(token, jwtAccessSecret,(err, payload)=>{
        if(err){
            return next(createError.Unauthorized())
        }

        req.payload = payload;
        next()
      })
  }
};
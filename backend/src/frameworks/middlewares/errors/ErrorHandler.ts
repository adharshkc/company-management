import { NextFunction, Request, Response } from "express";
import createError from "http-errors";

const ErrorHandler = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  next(createError.NotFound());
};

export default ErrorHandler;

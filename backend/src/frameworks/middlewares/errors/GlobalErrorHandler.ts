import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

const GlobalErrorHandler = (err: createError.HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
};

export default GlobalErrorHandler;

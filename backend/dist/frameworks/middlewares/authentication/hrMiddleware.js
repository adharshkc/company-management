"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyHrAccessToken = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtAccessSecret = process.env.JWT_ACCESS_SECRET;
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
const verifyHrAccessToken = (req, res, next) => {
    const authorization = req.header("Authorization");
    if (!authorization)
        return next(http_errors_1.default.Unauthorized());
    const bearerToken = authorization.split(" ");
    const token = bearerToken[1];
    if (jwtAccessSecret) {
        jsonwebtoken_1.default.verify(token, jwtAccessSecret, (err, payload) => {
            if (err) {
                const message = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
                return next(http_errors_1.default.Unauthorized(message));
            }
            req.hr = payload;
            next();
        });
    }
};
exports.verifyHrAccessToken = verifyHrAccessToken;
// export const verifyHrRefreshToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const refreshToken = req.cookies.hrToken;
//   if (!refreshToken) return next(createError(419, "RefreshToken not found"));
//   if (jwtRefreshSecret) {
//     jwt.verify(refreshToken, jwtRefreshSecret, (err: any, payload: any) => {
//       if (err) {
//         console.log(err.message);
//         const message =
//           err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
//         return next(createError(419,message));
//       }
//       // console.log(payload);
//       req.hr = payload as string;
//       next();
//     });
//   }
// };

import { TokenRepository } from "@application/interface/TokenRepository";
import jwt from "jsonwebtoken";

class GenerateToken implements TokenRepository {
  async createAccessToken(
    userId: number | undefined,
    commonId: number | undefined,
    role: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const secret = process.env.JWT_ACCESS_SECRET;
      // const payload = {
      // };
      const options = {
        expiresIn: "10h",
        issuer: "codilary",
      };

      if (secret) {
        jwt.sign(
          { userId: userId, commonId: commonId, role: role },
          secret,
          options,
          (err, token) => {
            if (err) {
              return reject(new Error("Error signing token"));
            }
            if (!token) {
              return reject(new Error("Access Token generation failed"));
            }
            resolve(token);
          }
        );
      } else {
        reject(new Error("JWT secret is not defined"));
      }
    });
  }
  async createRefreshToken(
    userId: number | undefined,
    commonId: number | undefined,
    role: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const secret = process.env.JWT_REFRESH_SECRET;
      const options = {
        expiresIn: "2d",
        issuer: "codilary",
      };
      jwt.sign(
        { userId: userId, commonId: commonId, role: role },
        secret as string,
        options,
        (err, token) => {
          if (err) {
            return reject(new Error("Error signing token"));
          }
          if (!token) {
            return reject(new Error("Refresh Token generation failed"));
          }
          resolve(token);
        }
      );
    });
  }
}

export default GenerateToken;

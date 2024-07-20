import { TokenRepository } from "@application/interface/TokenRepository";
import jwt from "jsonwebtoken";

class GenerateToken implements TokenRepository {
  async create(userId: number|undefined, role: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const secret = process.env.JWT_ACCESS_SECRET;
      const payload = {
        aud: [userId, role]
      };
      const options = {
        expiresIn: "10h",
        issuer: "codilary",
      };

      if (secret) {
        jwt.sign(payload, secret, options, (err, token) => {
          if (err) {
            return reject(new Error("Error signing token"));
          }
          if (!token) {
            return reject(new Error("Token generation failed"));
          }
          resolve(token);
        });
      } else {
        reject(new Error("JWT secret is not defined"));
      }
    });
  }
}

export default GenerateToken;

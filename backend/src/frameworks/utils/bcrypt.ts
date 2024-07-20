import { HashPassword } from "@application/interface/AdminRepository";
import bcrypt from "bcrypt"

class Bcrypt implements HashPassword{
    async compare(password: string, hashedPassword: string): Promise<boolean> {
        const matchPassword = await bcrypt.compare(password, hashedPassword)
        return matchPassword;
    }
}

export default Bcrypt
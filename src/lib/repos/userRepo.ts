import { User } from "@/types/user";
import db from "../db";


class UserRepo {
    async create(email: string, name: string, image: string) {
        const result = await db.query(
            "INSERT INTO users (email, name, image) VALUES ($1, $2, $3) RETURNING *",
            [email, name, image]
        );

        return result.rows[0];
    }

    async findByEmail(email?: string | null): Promise<User | undefined> {
        const result = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        return result.rows[0];
    }
}

const userRepo = new UserRepo();

export default userRepo;

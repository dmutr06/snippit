import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import db from "./lib/db";
import userRepo from "./lib/repos/userRepo";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn({ user }) {
            const existingUser = await userRepo.findByEmail(user.email); 
            if (!existingUser) {
                await userRepo.create(user.email!, user.name!, user.image!);
            }

            return true;
        }
    }
});

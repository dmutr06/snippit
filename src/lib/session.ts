import { auth } from "@/auth";


export async function getUser() {
    const session = await auth();

    if (!session?.user) return null;

    return {
        name: session.user.name!,
        email: session.user.email!,
        image: session.user.image!,
    }
}

import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";
import { notFound } from "next/navigation";


export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user) return notFound();

    return (
        <div>
            <div>Hello, {session.user.name}</div>
            <SignOutButton />
        </div>
    );
}

import SignOutButton from "@/components/SignOutButton";
import { getUser } from "@/lib/session";
import { notFound } from "next/navigation";


export default async function ProfilePage() {
    const user = await getUser();

    if (!user) return notFound();

    return (
        <div>
            <div>Hello, {user.name}</div>
            <SignOutButton />
        </div>
    );
}

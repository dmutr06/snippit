import { auth } from "@/auth";
import SignInButton from "./SignInButton";
import Profile from "./Profile";


export default async function Header() {
    const session = await auth();

    return (
        <header className="flex gap-2 items-center">
            <input className="bg-gray-200/10 rounded-xl px-4 py-3 w-full" />
            {session?.user ? <Profile /> : <SignInButton />}
        </header>
    );
}

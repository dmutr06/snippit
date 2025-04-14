import SignInButton from "./SignInButton";
import Profile from "./Profile";
import { getUser } from "@/lib/session";


export default async function Header() {
    const user = await getUser();

    return (
        <header className="flex gap-2 items-center">
            <input className="bg-gray-200/10 rounded-xl px-4 py-3 w-full" />
            {user ? <Profile /> : <SignInButton />}
        </header>
    );
}

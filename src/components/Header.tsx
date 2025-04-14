import SignInButton from "./SignInButton";
import Profile from "./Profile";
import { getUser } from "@/lib/session";
import SearchSnippetsForm from "./SearchSnippetsForm";


export default async function Header() {
    const user = await getUser();

    return (
        <header className="relative flex gap-2 items-center justify-center">
            <SearchSnippetsForm />
            <div className="absolute right-0">{user ? <Profile /> : <SignInButton />}</div>
        </header>
    );
}

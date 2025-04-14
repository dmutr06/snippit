import { signOut } from "@/auth";
import Button from "./ui/Button";


export default function SignOutButton() {
    const signOutAction = async () => {
        "use server";
        await signOut({ redirectTo: "/snippets" });
    }
    return (
        <form action={signOutAction}>
            <Button className="whitespace-nowrap" type="submit" variant="secondary">Sign out</Button>
        </form>
    );
}

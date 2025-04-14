import { signIn } from "@/auth";
import Button from "./ui/Button";


export default function SignInButton() {
    const signInAction = async () => {
        "use server";
        await signIn("google");
    }
    return (
        <form action={signInAction}>
            <Button className="whitespace-nowrap" type="submit">Sign in</Button>
        </form>
    );
}

import { getUser } from "@/lib/session";
import SignInButton from "@/components/SignInButton";
import Button from "@/components/ui/Button";
import CreateSnippetForm from "@/components/CreateSnippetForm";

export default async function New() {
    const user = await getUser();

    if (!user) return (
        <div className="flex items-center justify-center h-full">
            <SignInButton />
        </div>
    );

    return (
        <div className="max-w-3xl mx-auto p-6 bg-primary-300 rounded-xl mt-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Create New Snippet</h2>
            <CreateSnippetForm />
        </div>
    );
}

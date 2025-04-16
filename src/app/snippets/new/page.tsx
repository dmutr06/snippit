import { getUser } from "@/lib/session";
import CreateSnippetForm from "@/components/CreateSnippetForm";
import { unauthorized } from "next/navigation";

export default async function New() {
    const user = await getUser();

    if (!user) return unauthorized();

    return (
        <div className="max-w-3xl mx-auto p-6 bg-primary-300 rounded-xl mt-16">
            <h2 className="text-2xl font-bold mb-4 text-center">Create New Snippet</h2>
            <CreateSnippetForm />
        </div>
    );
}

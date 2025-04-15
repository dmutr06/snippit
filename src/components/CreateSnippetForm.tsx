import { InputHTMLAttributes, Ref } from "react";
import Button from "./ui/Button";
import { getUser } from "@/lib/session";
import snippetRepo from "@/lib/repos/snippetRepo";
import { revalidatePath } from "next/cache";

export default async function CreateSnippetForm() {
    const createSnippet = async (formData: FormData) => {
        "use server";

        const user = await getUser();
        if (!user) return;

        const title = formData.get("title")?.toString();
        const code = formData.get("code")?.toString();
        const language = formData.get("language")?.toString();
        const rawDescription = formData.get("description");
        const description = rawDescription ? rawDescription.toString() : null;
        const rawTags = formData.get("tags")?.toString();
        const tags = rawTags?.split(",").map(tag => tag.trim()).filter(Boolean) ?? [];

        if (!title || !code || !language) {
            return;
        }

        await snippetRepo.create({ title, code, language, description, tags, authorEmail: user.email, isPrivate: false });

        revalidatePath("/snippets");
    };
    return (
        <form action={createSnippet} className="space-y-4">
            <Input 
                name="title"
                placeholder="Title"
            />
            <textarea
                name="code"
                placeholder="Your code here..."
                className="w-full px-4 py-2 rounded-md bg-primary-100 h-48 font-mono"
            />
            <textarea
                name="description"
                placeholder="Write something about this snippet"
                className="w-full px-4 py-2 rounded-md bg-primary-100"
            />
            <Input
                name="language"
                placeholder="language (e.g., javascript)"
            />
            <Input
                name="tags"
                placeholder="Comma-separated tags"
            />
            <Button type="submit" className="block mx-auto w-sm">Create</Button>
        </form>
    );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>,
};

function Input(props: InputProps) {
    return <input {...props} className="w-full px-4 py-2 rounded-md bg-primary-100" />;
}

import { InputHTMLAttributes, Ref } from "react";
import Button from "./ui/Button";

export default async function CreateSnippetForm() {
    return (
        <form action="/api/snippets" method="POST" className="space-y-4">
            <Input 
                name="title"
                placeholder="Title"
            />
            <textarea
                name="code"
                placeholder="Your code here..."
                className="w-full px-4 py-2 rounded-md bg-gray-200/10 text-white h-48 font-mono"
            />
            <textarea
                name="description"
                placeholder="Write something about this snippet"
                className="w-full px-4 py-2 rounded-md bg-gray-200/10 text-white"
            />
            <Input
                name="language"
                placeholder="language (e.g., javascript)"
            />
            <Input
                name="tags"
                placeholder="Comma-separated tags"
            />
            <Button type="submit" variant="secondary" className="block mx-auto w-sm">Create</Button>
        </form>
    );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>,
};

function Input(props: InputProps) {
    return <input {...props} className="w-full px-4 py-2 rounded-md bg-gray-200/10 text-white" />
}

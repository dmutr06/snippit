import Link from "next/link";
import { Snippet } from "@/types/snippet";


export default function SnippetCard({ snippet }: { snippet: Snippet }) {
    console.log(snippet);
    return (
        <Link href={`/snippets/${snippet.id}`} className="flex flex-col gap-1 h-72 bg-gray-200/10 rounded-lg p-2">
            <div className="text-xl">{snippet.title}</div>
            <code className="whitespace-pre-wrap overflow-hidden bg-black/60 p-1 rounded-md w-full h-full block">{snippet.code}</code>
            <ul className="flex gap-2">
                {snippet.tags.map(tag => <li key={tag} className="bg-black/60 px-2 rounded-sm">{tag}</li>)}    
            </ul>
        </Link>
    );
}

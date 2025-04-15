"use client";

import Link from "next/link";
import { Snippet } from "@/types/snippet";


export default function SnippetCard({ snippet }: { snippet: Snippet }) {
    return (
        <Link href={`/snippets/${snippet.id}`} className="flex flex-col gap-2 h-72 bg-primary-300 rounded-lg p-2">
            <div className="text-xl">{snippet.title}</div>
            <code className="whitespace-pre-wrap overflow-hidden bg-primary-100 p-1 rounded-md w-full h-full block">{snippet.code}</code>
            <ul className="flex gap-2">
                {snippet.tags.map(tag => <li key={tag} className="bg-primary-100 px-2 rounded-sm">{tag}</li>)}    
            </ul>
        </Link>
    );
}

"use client";

import { Snippet } from "@/types/snippet";
import SnippetCard from "./SnippetCard";
import { useSearchParams } from "next/navigation";

export default function SnippetList({ snippets }: { snippets: Snippet[] }) {
    const searchParams = useSearchParams();

    const query = searchParams.get("q")?.toLowerCase();
    
    if (query)
        return (
            <ul className="h-full grid grid-cols-4 gap-4 flex-1 auto-rows-max overflow-y-auto min-h-0 p-4">
                {snippets.filter(snip => snip.title.toLowerCase().startsWith(query)).map(snip => <li key={snip.id}><SnippetCard snippet={snip} /></li>)}
            </ul>
        );

    return (
        <ul className="h-full grid grid-cols-4 gap-4 flex-1 auto-rows-max overflow-y-auto min-h-0 p-4">
            {snippets.map(snip => <li key={snip.id}><SnippetCard snippet={snip} /></li>)}
        </ul>
    );
}

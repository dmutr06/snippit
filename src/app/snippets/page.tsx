import SnippetCard from "@/components/SnippetCard";
import snippetRepo from "@/lib/repos/snippetRepo";

export default async function Snippets() {
    const snippets = await snippetRepo.getAllPublic();

    return (
        <ul className="h-full grid grid-cols-4 gap-4 flex-1 auto-rows-max overflow-y-auto min-h-0 p-4">
            {snippets.map(snip => <li key={snip.id}><SnippetCard snippet={snip} /></li>)}
        </ul>
    );
}

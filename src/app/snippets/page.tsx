import SnippetList from "@/components/SnippetList";
import snippetRepo from "@/lib/repos/snippetRepo";
import { unstable_cache } from "next/cache";

const getSnippets = unstable_cache(snippetRepo.getAllPublic, [], { tags: ["snippets"] });

// TODO: Add pagination

export default async function Snippets() {
    const snippets = await getSnippets();

    return <SnippetList snippets={snippets} />;
}

import CopyButton from "@/components/CopyButton";
import snippetRepo from "@/lib/repos/snippetRepo";
import { notFound } from "next/navigation";

interface SnippetPageProps {
    params: Promise<{
        id: string,
    }>
}

export default async function SnippetPage({ params }: SnippetPageProps) {
    const { id } = await params;
    const parsedId = Number(id);

    if (Number.isNaN(parsedId)) return notFound();

    const snippet = await snippetRepo.getById(parsedId);
    if (!snippet) return notFound();

    return (
        <div className="p-6 max-w-2xl mx-auto bg-primary-300 rounded-xl mt-16">
            <h1 className="text-2xl font-bold mb-2">{snippet.title}</h1>
            <div className="text-lg mb-4">{snippet.description}</div>
            <code className="p-4 rounded-md bg-primary-100 mb-2 block whitespace-pre-wrap relative">
                {snippet.code}
                <CopyButton content={snippet.code} />
            </code>
            <ul className="flex gap-2">
                {snippet.tags.map(tag => <li className="px-2 bg-primary-100 rounded" key={tag}>{tag}</li>)}
            </ul>
        </div>
    );
}

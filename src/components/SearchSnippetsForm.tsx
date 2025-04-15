"use client";

import { Search } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function SearchSnippetsForm() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        setQuery(searchParams.get("q") || "");
    }, [searchParams]);

    const search = () => {
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set("q", query);
        } else {
            params.delete("q");
        }
        const newSearchParams = params.toString();
        const q = newSearchParams ? `?${newSearchParams}` : "";
        router.push(`${pathname}${q}`);
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); search(); }} className="flex gap-2 w-1/2">
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="bg-primary-100 rounded-xl px-4 py-3 w-full" />
            <div className="p-1"><Button type="submit"><Search /></Button></div>
        </form>
    );
}

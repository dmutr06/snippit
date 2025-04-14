import { Search } from "lucide-react";
import Button from "./ui/Button";


export default function SearchSnippetsForm() {
    return (
        <form className="flex gap-2 w-1/2">
            <input className="bg-primary-100 rounded-xl px-4 py-3 w-full" />
            <div className="p-1"><Button type="submit"><Search /></Button></div>
        </form>
    );
}

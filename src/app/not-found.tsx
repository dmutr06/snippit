import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-full w-full flex items-center justify-center flex-col gap-4">
            <div className="text-2xl">Not Found :(</div>
            <Button><Link href="/snippets">Go to main</Link></Button>
        </div>
    );
}

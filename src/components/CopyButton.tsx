"use client";

import { Copy } from "lucide-react";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

export default function CopyButton({ content }: { content: string }) {
    const [copied, setCopied] = useState(false);
    const copyText = () => {
        navigator.clipboard.writeText(content).then(() => {
            setCopied(true);
        });

    };

    useEffect(() => {
        if (copied) {
            const id = setTimeout(() => {
                setCopied(false);  
            }, 1000);

            return () => clearTimeout(id);
        }
    }, [copied]);

    return (
        <Button onClick={copyText} variant="secondary" className="absolute top-1 right-1">
            <div className="relative">
                <Copy />
                {copied ? <div className="absolute -bottom-14 -left-6 bg-primary-400 px-2 py-1 rounded">Copied</div> : null}
            </div>
        </Button>
    );
}

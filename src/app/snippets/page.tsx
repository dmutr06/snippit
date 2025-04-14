import { auth } from "@/auth";


export default async function Snippets() {
    const session = auth();

    return (
        <div>
            Snippets
        </div>
    );
}

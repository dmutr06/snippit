import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

export default async function Home() {
    const session = await auth();
    return <div className="text-2xl w-full h-full flex items-center justify-center">Hello, {session?.user?.name}</div>;
}

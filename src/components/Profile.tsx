import Image from "next/image";
import { auth, signOut } from "@/auth";
import Button from "./ui/Button";
import Link from "next/link";


export default async function Profile() {
    const session = await auth();

    if (!session?.user) return null;
    
    return (
        <Link href="/profile" className="flex items-center justify-center h-12 aspect-square hover:cursor-pointer">
            <Image
                width={256}
                height={256}
                src={session.user.image!}
                alt="profile"
                className="object-cover w-full h-full rounded-full"
            />
        </Link>
    )
}

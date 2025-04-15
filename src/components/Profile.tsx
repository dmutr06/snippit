import Image from "next/image";
import Link from "next/link";
import { getUser } from "@/lib/session";


export default async function Profile() {
    const user = await getUser();

    if (!user) return null;
    
    return (
        <Link href="/profile" className="flex items-center justify-center h-12 aspect-square hover:cursor-pointer">
            <Image
                width={256}
                height={256}
                src={user.image}
                alt="profile"
                className="object-cover w-full h-full rounded-full"
            />
        </Link>
    );
}

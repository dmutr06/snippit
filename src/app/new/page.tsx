import Image from "next/image";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

export default async function New() {
    const session = await auth();

    if (!session?.user) return notFound();

    return <div>Create</div>;
}

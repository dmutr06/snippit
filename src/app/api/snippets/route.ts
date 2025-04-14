import snippetRepo from "@/lib/repos/snippetRepo";
import { getUser } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const user = await getUser();

    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();

    const title = formData.get("title")?.toString();
    const code = formData.get("code")?.toString();
    const language = formData.get("language")?.toString();
    const rawDescription = formData.get("description");
    const description = rawDescription ? rawDescription.toString() : null;
    const rawTags = formData.get("tags")?.toString();
    const tags = rawTags?.split(",").map(tag => tag.trim()).filter(Boolean) ?? [];

    if (!title || !code || !language) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const snippetId = await snippetRepo.create({ title, code, language, description, tags, authorEmail: user.email, isPrivate: false });

    return NextResponse.json({ snippetId }, { status: 201 });
}

export async function GET(_req: NextRequest) {
    const snippets = await snippetRepo.getAllPublic();

    return NextResponse.json({ snippets });
}

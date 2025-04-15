import { Snippet } from "@/types/snippet";
import db from "../db";
import { SnippetData } from "@/types/snippet";

// TODO: make it looks better

class SnippetRepo {
    async create({ title, code, language, description, isPrivate, authorEmail, tags }: SnippetData) {
        await db.query("BEGIN");

        const res = await db.query<Snippet>(
            "INSERT INTO snippets (title, code, language, description, is_private, author_email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
            [title, code, language, description, isPrivate, authorEmail],
        );

        const snippetId = res.rows[0].id;

        const uniqueTags = new Set([...tags, language].map(tag => tag.toLowerCase()));
        const tagIds = [];

        for (const tag of uniqueTags) {
            const tagRes = await db.query("SELECT id FROM tags WHERE name = $1", [tag]);

            if (tagRes.rowCount == 0) {
                const newTagRes = await db.query("INSERT INTO tags (name) VALUES ($1) RETURNING id", [tag]);
                tagIds.push(newTagRes.rows[0].id);
            } else {
                tagIds.push(tagRes.rows[0].id);
            }
        }

        for (const tagId of tagIds) {
            await db.query(
                "INSERT INTO snippet_tags (snippet_id, tag_id) VALUES ($1, $2)",
                [snippetId, tagId]
            );
        }

        await db.query("COMMIT");

        return snippetId;
    }

    async getAllPublic() {
        console.log("AAA");
        const res = await db.query<Snippet>(`
            SELECT 
                s.*,
                COALESCE(json_agg(DISTINCT t.name) FILTER (WHERE t.name IS NOT NULL), '[]') AS tags
            FROM snippets s
            LEFT JOIN snippet_tags st ON s.id = st.snippet_id
            LEFT JOIN tags t ON st.tag_id = t.id
            GROUP BY s.id
            ORDER BY s.id DESC
        `);

        return res.rows;
    }
}

const snippetRepo = new SnippetRepo();

export default snippetRepo;

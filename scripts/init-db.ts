import fs from "fs/promises";
import db from "@/lib/db";
import path from "path";

async function main() {
    const migrationsDir = path.join(process.cwd(), "sql");
    const migrations = (await fs.readdir(migrationsDir)).sort();
    const { rows } = await db.query("SELECT name FROM migrations");
    const completed = new Set(rows.map(row => row.name));

    for (const migration of migrations) {
        if (completed.has(migration)) {
            console.log(`Skipping already applied: ${migration}`);
            continue;
        }
        
        const sql = await fs.readFile(path.join(migrationsDir, migration), "utf8");
        console.log(`Running ${migration}`);
        await db.query(sql);
        await db.query("INSERT INTO migrations (name) VALUES ($1)", [migration]);
    }

    console.log("All migrations applied");
    process.exit(0);
}

main();

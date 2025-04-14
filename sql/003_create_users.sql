CREATE TABLE IF NOT EXISTS users (
    email TEXT PRIMARY KEY,
    name TEXT,
    image TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

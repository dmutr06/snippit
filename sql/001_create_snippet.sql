CREATE TABLE IF NOT EXISTS snippet (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    code TEXT NOT NULL,
    language TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ,
    author_email TEXT NOT NULL,
    is_private BOOLEAN DEFAULT TRUE
);

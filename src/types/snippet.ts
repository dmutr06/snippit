export interface Snippet {
    id: number,
    title: string,
    code: string,
    language: string,
    description: string,
    created_at: Date,
    updated_at: Date,
    author_email: string,
    is_private: boolean,
    tags: string[],
}

export interface SnippetData {
    title: string,
    code: string,
    language: string,
    description?: string | null,
    tags: string[],
    authorEmail: string,
    isPrivate: boolean,
}

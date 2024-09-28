export interface PostItem {
    title: string;
    date: string;
    url: string;
    slug: string;
    tags: string[];
    description: string;
    author: string;
    cover?: string;
}
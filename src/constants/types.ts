export interface CurrentUser {
    id: string;
    name: string;
    email: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    posts: Post[];
}

export interface Post {
    id?: string;
    published: boolean;
    title: string;
    content: string;
    voters?: User[];
    author?: User;
}

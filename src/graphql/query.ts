import { gql } from "apollo-boost";

export const meQuery = gql`
    query meQuery {
        me {
            id
            email
            name
        }
    }
`;

export interface Author {
    id: string;
    name: string;
    email: string;
}

export interface Post {
    id?: string;
    published: boolean;
    title: string;
    content: string;
    author?: Author
    voters?: Author[];
}

export interface IPostQuery {
    posts: Post[];
}

export const postsQuery = gql`
    query posts {
        posts {
            id
            published
            title
            content
            author {
                id
                email
                name
            }
            voters {
                id
                name
                email
            }
        }
    }
`;

export interface IMyUnpublishedPosts {
    myUnpublishedPosts: Post[];
}

export const myUnpublishedPosts = gql`
    query myUnpublishedPosts {
        myUnpublishedPosts {
            id
            published
            title
            content
            voters {
                id
                name
            }
        }
    }
`;

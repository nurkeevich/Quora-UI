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

export interface Post {
    id: string;
    published: boolean;
    title: string;
    content: string;
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
        }
    }
`;

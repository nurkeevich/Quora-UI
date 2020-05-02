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
            author {
                id
                email
                name
            }
        }
    }
`;

export interface GetPostResponse {
    id: string;
    published: boolean;
    title: string;
    content: string;
}

export const getPost = gql`
    query getPost($id: ID!) {
        post(id: $id) {
            id
            published
            title
            content
        }
    }
`;

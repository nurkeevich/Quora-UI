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
        }
    }
`;

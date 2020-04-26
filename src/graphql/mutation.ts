import { gql } from "apollo-boost";

export const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

export const logoutMutation = gql`
    mutation logoutMutation {
        logout {
            id
            email
            name
        }
    }
`;

export interface ICreatePost {
    createPost: {
        id: string;
        published: boolean;
        title: string;
        content: string;
    };
}

export const createPostMutation = gql`
    mutation createPost(
        $title: String!
        $content: String!
        $published: Boolean
    ) {
        createPost(title: $title, content: $content, published: $published) {
            id
            published
            title
            content
            author {
                id
                name
            }
        }
    }
`;

import { gql } from "apollo-boost";

export interface LoginMutationResponse {
    id: string;
    email: string;
    name: string;
}

export const loginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            name
        }
    }
`;

export interface LogoutMutationResponse {
    id: string;
    email: string;
    name: string;
}

export const logoutMutation = gql`
    mutation logoutMutation {
        logout {
            id
            email
            name
        }
    }
`;

export interface CreatePostMutationResponse {
    id: string;
    published: boolean;
    title: string;
    content: string;
    author: {
        id: string;
        name: string;
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

export interface DeletePostMutationResponse {
    id: string;
    published: boolean;
    title: string;
    content: string;
}

export const deletePostMutation = gql`
    mutation deletePostMutation($id: ID!) {
        deletePost(id: $id) {
            id
            published
            title
            content
        }
    }
`;

export interface UpdatePostMutationResponse {
    id: string;
    published: boolean;
    title: string;
    content: string;
}

export const updatePostMutation = gql`
    mutation updatePost(
        $id: ID!
        $title: String
        $content: String
        $published: Boolean
    ) {
        updatePost(id: $id, data: { title: $title, content: $content, published: $published }) {
            id
            published
            title
            content
        }
    }
`;

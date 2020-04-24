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

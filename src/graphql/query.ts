import { gql } from "apollo-boost";

export const meQuery = gql`
    {
        me {
            id
            email
            name
        }
    }
`;

import ApolloClient from "apollo-boost";
import { URL } from "../constants/appConstants";

const apolloClient = new ApolloClient({
    credentials: "include",
    uri: URL.GRAPHQL_ENDPOINT
});

export default apolloClient;

import ApolloClient from "apollo-boost";
import { URL } from "../constants/appConstants";

const apolloClient = new ApolloClient({
    uri: URL.GRAPHQL_ENDPOINT
});

export default apolloClient;

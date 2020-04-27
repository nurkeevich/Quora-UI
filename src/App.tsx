import React, { useState, useMemo } from "react";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./utils/Auth";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./utils/apolloClient";
import { UserProvider } from "./utils/UserProvider";

const App = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <UserProvider>
                <AppRoutes />
            </UserProvider>
        </ApolloProvider>
    );
};

export default App;

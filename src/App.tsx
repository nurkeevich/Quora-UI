import React, { useState, useMemo } from "react";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./utils/Auth";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./utils/apolloClient";

const App = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </ApolloProvider>
    );
};

export default App;

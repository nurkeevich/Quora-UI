import { useQuery } from "@apollo/react-hooks";
import { meQuery } from "../graphql/query";
import React from "react";
import { AuthProvider } from "./Auth";

export const UserProvider = ({children}: any) => {
    const { loading, error, data } = useQuery(meQuery, { fetchPolicy: "network-only" });

    if (loading) {
        return <p>Loading...</p>
    }

    const getUser = () => {
        if (error) {
            return undefined;
        }

        const user = data.me;
        return user;
    }
    

    return (
        <div>
            <AuthProvider children={children} user={getUser}/>
        </div>
    );
};
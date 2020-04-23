import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { meQuery } from "../graphql/query";

const Help = () => {
    const { loading, error, data } = useQuery(meQuery);

    const handleGetUser = () => {
        console.log("GET USER", data);
        
    };

    return (
        <div>
            <h1>Help Page</h1>
            <button onClick={handleGetUser}>get user</button>
        </div>
    );
};

export default Help;

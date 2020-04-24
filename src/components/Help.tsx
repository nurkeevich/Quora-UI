import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { meQuery } from "../graphql/query";
import { AuthContext } from "../utils/Auth";

const Help = () => {
    const { loading, error, data } = useQuery(meQuery);
    const {currentUser, setCurrentUser} = useContext(AuthContext);

    const handleGetUser = () => {
        console.log("GET USER", data);
        console.log("CURRENT USER", currentUser);
    };

    return (
        <div>
            <h1>Help Page</h1>
            <button onClick={handleGetUser}>get user</button>
        </div>
    );
};

export default Help;

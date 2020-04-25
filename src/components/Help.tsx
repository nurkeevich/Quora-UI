import React, { useContext, useMemo } from "react";
import { AuthContext } from "../utils/Auth";

const Help = () => {
    const { currentUser } = useContext(AuthContext);

    const handleGetUser = () => {
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

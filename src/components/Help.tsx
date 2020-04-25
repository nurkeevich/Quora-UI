import React, { useContext, useMemo } from "react";
import { AuthContext } from "../utils/Auth";

const Help = () => {
    const { currentUser } = useContext(AuthContext);
    const user = useMemo(() => ({ currentUser }), [currentUser]);

    const handleGetUser = () => {
        console.log("CURRENT USER", user.currentUser);
    };

    return (
        <div>
            <h1>Help Page</h1>
            <button onClick={handleGetUser}>get user</button>
        </div>
    );
};

export default Help;

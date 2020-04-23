import React, { useContext } from "react";
import { AuthContext } from "../utils/Auth";

const Dashboard = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const handleLogout = () => {
        setCurrentUser(undefined);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {currentUser && <button onClick={handleLogout}>logout</button>}
        </div>
    );
};

export default Dashboard;

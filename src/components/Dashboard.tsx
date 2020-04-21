import React, { useContext } from "react";
import { AuthContext } from "../utils/Auth";

const Dashboard = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;

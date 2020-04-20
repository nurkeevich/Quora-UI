import React, { useContext } from "react";
import UserContext from "../utils/contexts/UserContext";

const Dashboard = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {user && <button onClick={handleLogout}>Logout</button>}
        </div>
    );
};

export default Dashboard;

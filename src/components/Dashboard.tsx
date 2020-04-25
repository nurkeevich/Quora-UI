import React, { useContext } from "react";
import { AuthContext } from "../utils/Auth";
import { useMutation } from "@apollo/react-hooks";
import { CurrentUser } from "../constants/types";
import { logoutMutation } from "../graphql/mutation";

const Dashboard = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const [logout, { loading, error, data }] = useMutation<{ logout: CurrentUser }>(logoutMutation);

    const handleGetUser = () => console.log(currentUser);

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setCurrentUser(undefined);
        const result = logout();
        result
            .then(response => {
                if (response.data) {
                    console.log(response.data.logout.name);
                    alert("Successfully logout!");
                } else {
                    console.log(response);
                }
            })
            .then(error => {
                console.log("error", error);
            });
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {currentUser && <button onClick={handleLogout}>logout</button>}
            <button onClick={handleGetUser}>get user</button>
        </div>
    );
};

export default Dashboard;

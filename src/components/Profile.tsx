import React, { useContext, useMemo } from "react";
import { AuthContext } from "../utils/Auth";
import { useMutation } from "@apollo/react-hooks";
import { CurrentUser } from "../constants/types";
import { logoutMutation } from "../graphql/mutation";

const Profile = () => {
    const {currentUser, setCurrentUser} = useContext(AuthContext)
    const [logout, { loading, error, data }] = useMutation<{ logout: CurrentUser }>(logoutMutation);

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setCurrentUser(undefined);
        logout()
            .then(response => {
                if (response.data) {
                    alert("Successfully logout!");
                } else {
                    console.log(response);
                }
            })
            .then(error => {
                console.log("error", error);
            });
    };

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Profile</h1>
            {currentUser && <button onClick={handleLogout}>logout</button>}
        </div>
    );
};

export default Profile;

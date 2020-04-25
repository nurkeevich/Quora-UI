import React, { useContext, useMemo } from "react";
import { AuthContext } from "../utils/Auth";
import { useMutation } from "@apollo/react-hooks";
import { CurrentUser } from "../constants/types";
import { logoutMutation } from "../graphql/mutation";

const Profile = () => {
    const {currentUser, setCurrentUser} = useContext(AuthContext)
    const user = useMemo(() => ({currentUser}), [currentUser])
    const [logout, { loading, error, data }] = useMutation<{ logout: CurrentUser }>(logoutMutation);

    console.log(user);
    

    const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setCurrentUser(undefined);
        logout()
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
            <h1>Profile</h1>
            {user.currentUser && <button onClick={handleLogout}>logout</button>}
        </div>
    );
};

export default Profile;

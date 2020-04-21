import React, { useContext } from "react";
import { AuthContext } from "../utils/Auth";

const Profile = () => {
    const {currentUser, setCurrentUser} = useContext(AuthContext)

    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Routes } from "../../constants/appConstants";
import { AuthContext } from "../../utils/Auth";

const Header = () => {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    return (
        <header>
            <NavLink to={Routes.DASHBOARD} exact >Dashboard</NavLink>
            <NavLink to={Routes.HELP}>Help</NavLink>
            {currentUser 
                ? (
                    <div>
                        <NavLink to={Routes.PROFILE}>Profile</NavLink>
                        <NavLink to={Routes.CREATEPOST}>Create Post</NavLink>
                    </div>
                ) 
                : (
                    <div>
                        <NavLink to={Routes.LOGIN}>Login</NavLink>
                        <NavLink to={Routes.SIGNUP}>Signup</NavLink>
                    </div>
                  )
            }
        </header>
    );
};

export default Header;

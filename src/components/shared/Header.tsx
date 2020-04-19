import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../constants/appConstants";

const Header = () => {
    let auth = true;

    return (
        <header>
            <NavLink to={Routes.DASHBOARD} exact={true}>Dashboard</NavLink>
            <NavLink to={Routes.HELP}>Help</NavLink>
            {
                auth 
                ? (<NavLink to={Routes.PROFILE}>Profile</NavLink>) 
                : (<NavLink to={Routes.LOGIN}>Login</NavLink>)
            }
        </header>
    );
};

export default Header;

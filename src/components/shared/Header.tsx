import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../constants/appConstants";

const Header = () => {
    let auth = false;

    return (
        <header>
            <NavLink to={Routes.DASHBOARD} exact={true}>Dashboard</NavLink>
            <NavLink to={Routes.HELP}>Help</NavLink>
            <NavLink to={Routes.PROFILE}>Profile</NavLink>
            <NavLink to={Routes.LOGIN}>Login</NavLink>
            <NavLink to={Routes.SIGNUP}>Singup</NavLink>
        </header>
    );
};

export default Header;

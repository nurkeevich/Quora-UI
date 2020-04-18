import React from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../constants/AppConstants";

const Header = () => {
    return (
        <header>
            <NavLink to={Routes.DASHBOARD} exact={true}>Dashboard</NavLink>
            <NavLink to={Routes.HELP}>Help</NavLink>
        </header>
    );
};

export default Header;

import React, { useContext, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../constants/appConstants";
import { AuthContext } from "../../utils/Auth";

const Header = () => {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    

    return (
        <header>
            <NavLink to={Routes.DASHBOARD} exact={true}>Dashboard</NavLink>
            <NavLink to={Routes.HELP}>Help</NavLink>
            {currentUser 
                ? (<NavLink to={Routes.PROFILE}>Profile</NavLink>) 
                : (
                    <div>
                        <NavLink to={Routes.LOGIN}>Login</NavLink>
                        <NavLink to={Routes.SIGNUP}>Singup</NavLink>
                    </div>
                  )
            }
        </header>
    );
};

export default Header;

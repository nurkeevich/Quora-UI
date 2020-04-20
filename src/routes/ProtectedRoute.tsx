import { Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import userAuth from "../utils/userAuth";
import { Routes } from "../constants/appConstants";
import UserContext from "../utils/contexts/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {

    const {user} = useContext(UserContext);

    console.log("user inside protected route: ", user);
    

    return (
        <Route
            {...rest}
            render={(props) => {
                if (user) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: Routes.LOGIN,
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRoute;

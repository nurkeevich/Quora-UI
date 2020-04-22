import React, { useContext } from "react";
import { AuthContext } from "../utils/Auth";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "../constants/appConstants";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props => {
                if (currentUser) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: Routes.LOGIN,
                                state: { from: props.location }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;

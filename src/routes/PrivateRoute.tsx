import React, { useContext, useMemo } from "react";
import { AuthContext } from "../utils/Auth";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "../constants/appConstants";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const { currentUser } = useContext(AuthContext);
    const user = useMemo(() => ({ currentUser }), [currentUser]);

    return (
        <Route
            {...rest}
            render={props => {
                if (user) {
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

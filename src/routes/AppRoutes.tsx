import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "../constants/appConstants";
import Header from "../components/shared/Header";
import Dashboard from "../components/Dashboard";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path={Routes.DASHBOARD} exact={true} component={Dashboard}/>
                    <PrivateRoute path={Routes.PROFILE} component={Profile} />
                    <Route path={Routes.LOGIN} component={Login} />
                    <Route path={Routes.SIGNUP} component={Signup} />
                    <Route path={Routes.HELP} component={Help} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;

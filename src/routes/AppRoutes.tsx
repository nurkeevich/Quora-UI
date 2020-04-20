import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "../constants/appConstants";
import ProtectedRoute from "./ProtectedRoute";
import Header from "../components/shared/Header";
import Dashboard from "../components/Dashboard";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Signup from "../components/Signup";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path={Routes.DASHBOARD} exact={true} component={Dashboard}/>
                    <Route path={Routes.LOGIN} component={Login} />
                    <Route path={Routes.SIGNUP} component={Signup} />
                    <Route path={Routes.HELP} component={Help} />
                    <ProtectedRoute path={Routes.PROFILE} component={Profile} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;

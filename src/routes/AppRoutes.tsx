import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "../constants/appConstants";
import Header from "../components/shared/Header";
import Dashboard from "../components/Dashboard";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import Profile from "../components/Profile";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path={Routes.DASHBOARD} exact={true} component={Dashboard}/>
                    <Route path={Routes.LOGIN} component={Login}/>
                    <Route path={Routes.HELP} component={Help}/>
                    <Route path={Routes.PROFILE} component={Profile}/> 
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "../constants/AppConstants";
import Header from "../components/shared/Header";
import Dashboard from "../components/Dashboard";
import Help from "../components/Help";
import NotFound from "../components/shared/NotFound";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path={Routes.DASHBOARD} exact={true} component={Dashboard}/>
                    <Route path={Routes.HELP} component={Help}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;

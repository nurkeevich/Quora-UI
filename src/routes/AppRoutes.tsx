import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "../constants/appConstants";
import Header from "../components/shared/Header";
import Dashboard from "../components/Dashboard";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";
import RouteToDashboardIfUserExists from "./RouteToDashboardIfUserExists";
import CreatePost from "../components/posts/CreatePost";
import MyDrafts from "../components/posts/MyDrafts";
import EditPost from "../components/posts/EditPost";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path={Routes.DASHBOARD} exact component={Dashboard} />
                    <Route path={Routes.HELP} component={Help} />
                    <PrivateRoute path={Routes.PROFILE} component={Profile} />
                    <PrivateRoute path={Routes.CREATEPOST} component={CreatePost} />
                    <PrivateRoute path={Routes.MYDRAFTS} component={MyDrafts} />
                    <PrivateRoute path={Routes.EDIT_POST + "/:id"} component={EditPost} />
                    <RouteToDashboardIfUserExists path={Routes.LOGIN} component={Login} />
                    <RouteToDashboardIfUserExists path={Routes.SIGNUP} component={Signup} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;

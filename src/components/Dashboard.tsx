import React from "react";
import { Posts } from "./posts/Posts";
import { RouteComponentProps } from "react-router-dom";

interface DashboardProps extends RouteComponentProps {
    // Add own props here
}

const Dashboard: React.FC<DashboardProps> = props => {
    console.log(props);
    
    return (
        <div>
            <h1>Dashboard</h1>
            <Posts />
        </div>
    );
};

export default Dashboard;

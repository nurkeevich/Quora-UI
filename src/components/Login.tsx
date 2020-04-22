import React, { useState, useContext } from "react";
import { AuthContext } from "../utils/Auth";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../constants/appConstants";

interface LoginProps extends RouteComponentProps {
    // add own custom props
}

const Login: React.FC<LoginProps> = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setCurrentUser } = useContext(AuthContext);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentEmail = event.currentTarget.value;
        setEmail(currentEmail);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentPassword = event.currentTarget.value;
        setPassword(currentPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {
            id: "asd",
            name: "Tilek",
            email
        };

        setCurrentUser(user);
        props.history.push(Routes.PROFILE);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

import React, { useState, useContext } from "react";
import { AuthContext } from "../utils/Auth";
import { RouteComponentProps } from "react-router-dom";
import { Routes } from "../constants/appConstants";
import { useMutation } from "@apollo/react-hooks";
import { loginMutation } from "../graphql/mutation";
import { CurrentUser } from "../constants/types";

interface LoginProps extends RouteComponentProps {
    // add own custom props
}

const Login: React.FC<LoginProps> = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setCurrentUser } = useContext(AuthContext);
    const [login, { loading, error, data }] = useMutation<{ login: CurrentUser }>(loginMutation);

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
        const result = login({ variables: { email, password } });
        setPassword("");
        result
            .then(response => {
                if (response.data) {
                    setCurrentUser(response.data.login);
                    props.history.push(Routes.PROFILE);
                } else {
                    setCurrentUser(undefined);
                }
            })
            .catch(error => {
                setCurrentUser(undefined);
            });
        
    };

    if (loading) {
        return <p>Loading...</p>
    }

    if (data) {
        console.log(data);
    }

    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
                <input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

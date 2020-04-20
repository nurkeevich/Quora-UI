import React, { useState, useContext } from "react";
import UserContext from "../utils/contexts/UserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);

    const handleLogin = () => {
        console.log("email", email);
        console.log("password", password);
        setUser({
            id: "124233523",
            name: "Tilek",
            email: "tilek@example.com"
        })

        console.log("user after set", user);
        
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentEmail = event.currentTarget.value;
        setEmail(currentEmail);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentPassword = event.currentTarget.value;
        setPassword(currentPassword);
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
            />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
            />
            <button onClick={handleLogin}>login</button>
        </div>
    );
};

export default Login;

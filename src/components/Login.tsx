import React, { useState, useContext } from "react";
import { AuthContext } from "../utils/Auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser, setCurrentUser } = useContext(AuthContext);

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
            name: "Test name",
            email: "test@example.com"
        };

        setCurrentUser(user);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={handleEmailChange} />
                <input type="password" value={password} onChange={handlePasswordChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

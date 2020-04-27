import React, {
    useState,
    createContext,
    useMemo,
    Dispatch,
    SetStateAction
} from "react";
import { CurrentUser } from "../constants/types";

interface IAuthContextProps {
    currentUser: CurrentUser;
    setCurrentUser: Dispatch<SetStateAction<CurrentUser | undefined>>;
}

export const AuthContext = createContext({} as IAuthContextProps);

interface AuthProviderProps {
    children: any,
    user: any
}

export const AuthProvider = (props: AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState(props.user);
    const userProvider = useMemo(() => ({ currentUser, setCurrentUser }), [
        currentUser,
        setCurrentUser
    ]);

    return (
        <AuthContext.Provider value={userProvider}>
            {props.children}
        </AuthContext.Provider>
    );
};


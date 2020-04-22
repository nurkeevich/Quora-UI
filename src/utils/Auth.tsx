import React, {
    useState,
    useEffect,
    createContext,
    useMemo,
    Dispatch,
    SetStateAction
} from "react";
import { useQuery } from "@apollo/react-hooks";
import { meQuery } from "../graphql/query";
import { Redirect } from "react-router-dom";
import { Routes } from "../constants/appConstants";

interface ICurrentUserProps {
    id: string;
    name: string;
    email: string;
}

interface IAuthContextProps {
    currentUser: ICurrentUserProps;
    setCurrentUser: Dispatch<SetStateAction<ICurrentUserProps | undefined>>;
}

export const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const userProvider = useMemo(() => ({ currentUser, setCurrentUser }), [
        currentUser,
        setCurrentUser
    ]);
    const { loading, error, data } = useQuery(meQuery);

    useEffect(() => {
        getUser()
            .then(user => {
                setCurrentUser(user);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <AuthContext.Provider value={userProvider}>
            {children}
        </AuthContext.Provider>
    );
};

const getUser = async () => {
    return undefined;
    // return {
    //     id: "123123123",
    //     name: "Tilek Kadyrov",
    //     email: "tilek@example.com"
    // };
};

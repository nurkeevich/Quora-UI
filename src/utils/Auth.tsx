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
import { CurrentUser } from "../constants/types";

interface IAuthContextProps {
    currentUser: CurrentUser;
    setCurrentUser: Dispatch<SetStateAction<CurrentUser | undefined>>;
}

export const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState<any>(null);
    const userProvider = useMemo(() => ({ currentUser, setCurrentUser }), [
        currentUser,
        setCurrentUser
    ]);
    const { loading, error, data } = useQuery(meQuery);

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error :( {error.message}</p>;

    if (data) console.log(data);

    // if (data) {
    //     console.log(data);
    //     setCurrentUser(data.me);
    // }

    return (
        <AuthContext.Provider value={userProvider}>
            {children}
        </AuthContext.Provider>
    );
};

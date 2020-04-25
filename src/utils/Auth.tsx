import React, {
    useState,
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
    const userProvider = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser, setCurrentUser]);
    const { data } = useQuery(meQuery);

    useMemo(() => { setCurrentUser(data) }, [data]);

    return (
        <AuthContext.Provider value={userProvider}>
            {children}
        </AuthContext.Provider>
    );
};

import React, { useState, useMemo } from "react";
import AppRoutes from "./routes/AppRoutes";
import UserContext from "./utils/contexts/UserContext";

const App = () => {
    const [user, setUser] = useState(null)
    const userProvider = useMemo(() => ({user, setUser}), [user, setUser])

    return (
        <UserContext.Provider value={userProvider}>
            <AppRoutes />
        </UserContext.Provider>
    );
};

export default App;

import React, { useState, useMemo } from "react";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./utils/Auth";

const App = () => {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
};

export default App;

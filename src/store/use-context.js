import { createContext, useState } from "react";
import { getAuthToken, getTokenDuration } from "../helpers";

export const AuthContext = createContext({
    token: null,
});

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(getAuthToken());

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }

    const login = (data) => {

        const { idToken, expiresIn } = data;

        const expirationDate = new Date(new Date().getTime() + (+expiresIn * 1000));

        setToken(idToken);
        localStorage.setItem('token', idToken);
        localStorage.setItem('expiration', expirationDate);

        setTimeout(() => {
            logout()
        }, getTokenDuration(expirationDate))

    }

    const authState = {
        token,
        login,
        logout,
    }

    return <AuthContext.Provider value={authState}>
        {children}
    </AuthContext.Provider>
}
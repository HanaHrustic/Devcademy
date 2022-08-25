import { createContext, useState } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token: any) => {},
    logout: () => {}
});

export const AuthContextProvider = (props: any) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState<any>(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token: any) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setToken(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
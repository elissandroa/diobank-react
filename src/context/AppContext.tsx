import { getAllStorage } from "@/services/storage";
import { createContext, useEffect, useState } from "react";

interface IAppContext {
    user: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    errorLogin: string;
    setErrorLogin: (errorLogin: string) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<string>("");

    const user = "Elissandro Aparecido Anastácio";

    useEffect(() => {
        const storage = getAllStorage();
        const { login } = JSON.parse(String(storage));
        if (storage) {
            setIsLoggedIn(login);
        }
    }, [])


    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, errorLogin, setErrorLogin }}>
            {children}
        </AppContext.Provider>
    )
}

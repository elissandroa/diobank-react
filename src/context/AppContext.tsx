import { getAllStorage } from "@/services/storage";
import { createContext, useEffect, useState } from "react";

interface IAppContext {
    user: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
   
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const user = "Elissandro Aparecido Anastácio";
    const storage = getAllStorage();

    const { login } = JSON.parse(storage);
    useEffect(() => {
        if (storage) {
            setIsLoggedIn(login);
        }
    },[login])

    
    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}

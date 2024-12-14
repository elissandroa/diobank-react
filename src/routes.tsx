import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Conta } from "./Pages/Conta";
import { ContaInfo } from "./Pages/ContaInfo";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { UserInfo } from "./Pages/UserInfo";

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext);
    return (
        <Routes>
            <Route path="/" element={isLoggedIn ? <ContaInfo /> : <Home />} />
            <Route path="/home" element={<ContaInfo />} />
            <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path="/infoconta" element={isLoggedIn ? <ContaInfo /> : <Home />} />
            <Route path="/infouser/:id" element={isLoggedIn ? <UserInfo /> : <Home />} />
        </Routes>
    )
}


export default MainRoutes;
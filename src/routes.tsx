import { Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home";
import { Conta } from "./Pages/Conta";
import { ContaInfo } from "./Pages/ContaInfo";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext);
    return (
        <Routes>
            <Route path="/" element={isLoggedIn ? <App /> : <Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path="/infoconta" element={isLoggedIn ? <ContaInfo /> : <Home />} />
        </Routes>
    )
}


export default MainRoutes;
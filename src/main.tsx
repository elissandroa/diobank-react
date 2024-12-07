import { Provider } from "@/components/ui/provider"
import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home.tsx"
import App from "./App.tsx"
import { Layout } from "./components/Layout.tsx"
import { Header } from "./components/Header.tsx"
import { Footer } from "./components/Footer.tsx"
import { Conta } from "./Pages/Conta.tsx"
import { ContaInfo } from "./Pages/ContaInfo.tsx"
interface IAppContext {
  user: string;
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({ children }: any) => {
  const user = "Elissandro";
  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/home" element={<Home />} />
              <Route path="/conta/:id" element={<Conta />} />
              <Route path="/infoconta" element={<ContaInfo />} />
            </Routes>
            <Footer />
          </Layout>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

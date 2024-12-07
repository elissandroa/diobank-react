import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home.tsx"
import App from "./App.tsx"
import { Layout } from "./components/Layout.tsx"
import { Header } from "./components/Header.tsx"
import { Footer } from "./components/Footer.tsx"
import { Conta } from "./Pages/Conta.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Layout>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/conta" element={<Conta />} />
          </Routes>
          <Footer />
        </Layout>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)

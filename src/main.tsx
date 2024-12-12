import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout.tsx"
import { Header } from "./components/Header.tsx"
import { Footer } from "./components/Footer.tsx"
import { AppContextProvider } from "./context/AppContext.tsx"
import MainRoutes from "./routes.tsx"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Provider>
          <Layout>
            <Header />
              <MainRoutes />
            <Footer />
          </Layout>
        </Provider>
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

import styled from "styled-components"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"

const Box = styled.div`
  background-color: orange;
  border-radius: 25px;
  padding-left: 15px;
`

function App() {
  return (
    <Layout>
      <Header />
      <Box>
        <h1>Faça o Login</h1>
      </Box>

      <label htmlFor="inputEmail">E-mail:</label>
      <input type="email" id="inputEmail" placeholder="Digite o email" />
      <label htmlFor="inputPassword">Senha:</label>
      <input type="password" id="inputPassword" placeholder="Digite a senha" />
      <button>Adicionar</button>
      <Footer />
    </Layout>
  )
}

export default App

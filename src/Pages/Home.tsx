import { login } from "../services/login"
import { ButtonCard } from "../components/Button"
import { Card } from "../components/Card"
import { Box, Center, Input } from "@chakra-ui/react"
import { useContext, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { AppContext } from "@/context/AppContext"

const Title = styled.h1`
  font-size:2em;
  font-weight:bold;
`

export const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      setIsLoggedIn(false);
      return alert('Email inválido!');
    }
    setIsLoggedIn(true);
    navigate('/conta/1')
  }

  return (
    <Card>
      <Center>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='400px'>
          {/* {userData === null || userData === undefined && <h1>Loading...</h1>} */}
          <Center>
            <Title>
              <h1>Login</h1>
            </Title>
          </Center>
          <Input
            placeholder="Email"
            type="email"
            marginTop='.5rem'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            marginTop='.5rem'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Center>
            <ButtonCard fncButton={() => validateUser(email)} action="Entrar" />
          </Center>
        </Box>
      </Center>
    </Card>
  )
}

import { Box, Center, Input } from "@chakra-ui/react"
import styled from "styled-components"
import { ButtonCard } from "./Button"
import { useState } from "react"

const Title = styled.h1`
  font-size:2em;
  font-weight:bold;
`

export const Card = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const fncMsgBoasVindas = (email: string): void => {
        alert(`Bem vindo ${email}`);
    }
    return (
        <Box minHeight='82.84vh' maxWidth='100vw' backgroundColor='#9413dc' padding='25px' alignContent='center'>
            <Center>
                <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' width='400px'>
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
                        <ButtonCard fncButton={() => fncMsgBoasVindas(email)} action="Cadastrar" />
                    </Center>
                </Box>
            </Center>
        </Box>
    )
}

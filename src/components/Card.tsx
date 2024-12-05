import { Box, Center, Input } from "@chakra-ui/react"
import styled from "styled-components"
import { ButtonCard } from "./Button"

const Title = styled.h1`
  font-size:2em;
  font-weight:bold;
`

export const Card = () => {

    const fncMsgBoasVindas = () => {
        alert('Bem vindo Elissandro!');
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
                    <Input placeholder="Email" type="email" marginTop='.5rem' />
                    <Input placeholder="Senha" type="password" marginTop='.5rem' />
                    <Center>
                        <ButtonCard fncButton={fncMsgBoasVindas} action="Cadastrar" />
                    </Center>
                </Box>
            </Center>
        </Box>
    )
}

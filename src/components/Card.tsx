import { Box } from "@chakra-ui/react"



export const Card = ({ children }: any) => {


    /* const fncMsgBoasVindas = (email: string): void => {
        alert(`Bem vindo ${email}`);
    } */

    return (
        <Box minHeight='82.84vh' maxWidth='100vw' backgroundColor='#9413dc' padding='25px' alignContent='center'>
            {children}
        </Box>
    )
}

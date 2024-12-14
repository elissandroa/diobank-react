import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const ContaInfo = () => {
    return (
        <>
            <Text fontSize='2em' fontWeight='bold' fontStyle='italic' marginLeft={10}>Informações da Conta</Text>
            <Link to='/conta/1'>
            <Text fontSize='xl' backgroundColor='white' width='200px' borderRadius='10px' textAlign='center' fontWeight='bold' marginLeft={10} marginTop={5}>Conta</Text>
            </Link>
            <Link to='/infouser/1'>
            <Text fontSize='xl' backgroundColor='white' width='200px' borderRadius='10px' textAlign='center' fontWeight='bold' marginLeft={10} marginTop={5}>Usuário</Text>
            </Link>
            
        </>
   )
}

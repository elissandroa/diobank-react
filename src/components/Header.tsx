import { AppContext } from '@/context/AppContext';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import { useContext } from 'react'
export const Header = () => {
  const { setIsLoggedIn, isLoggedIn} = useContext(AppContext);


  const logout = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <Flex backgroundColor='orange' padding='5px'>
      <Box padding='1rem' fontWeight='bold' fontSize='1.5rem' maxWidth='100vw'>
        <h2>Dio Bank</h2>
      </Box>
      <Spacer />
      {isLoggedIn && <Button onClick={() => logout()} backgroundColor='white' color='black' marginTop='10px' marginRight='10px'>Sair</Button>}
    </Flex>
  )
}

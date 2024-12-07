import { AppContext } from '@/main';
import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
export const Header = () => {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <Box padding='1rem' backgroundColor='orange' fontWeight='bold' fontSize='1.5rem' maxWidth='100vw'>
      <h2>Dio Bank</h2>
    </Box>
  )
}

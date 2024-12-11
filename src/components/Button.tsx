import { Button } from "@chakra-ui/react";

interface IButton  {
    fncButton: () => any;
    action: string;
}


export const ButtonCard = ({fncButton, action}:IButton) => {
  return (
    <Button onClick={fncButton}  type="submit" colorPalette='teal' size='sm' borderRadius='.5rem'marginBottom='.5rem' marginTop='1.5rem' color='#FFFFFF' width='100%' fontWeight='bold' padding='.5rem'>{action}</Button>
  )
}

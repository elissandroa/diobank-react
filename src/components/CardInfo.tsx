import { Box } from "@chakra-ui/react"
interface ICardInfo {
    text : string;
}

export const CardInfo = ({text}:ICardInfo) => {
    return (
        <Box 
        backgroundColor='#FFFFFF' 
        padding={8} 
        minHeight='120px'
        borderRadius='2rem'
        >
            {text}
        </Box>
    )
}

import { Box } from "@chakra-ui/react"

export const Layout = ({ children }: any) => {
    return (
       <Box backgroundColor='#9413dc' minWidth='100vw' minHeight='89vh'>{children}</Box>
    )
}

import { api } from "@/api"
import { CardInfo } from "@/components/CardInfo"
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"



interface IUser {
    email: string;
    password: string;
    name: string;
}

export const Conta = () => {

    const [userData, setUserData] = useState<null | IUser>();

    useEffect(() => {
        const getApi = async () => {
            const data: any | IUser = await api;
            setUserData(data);
        }

        getApi();
    }, [])

    const actualData = new Date();

    return (
        <Center>
            <SimpleGrid columns={2} gap={4} paddingTop={16}   >
                {userData ?
                   <>
                    <CardInfo
                        mainContent={`Bem vindo ${userData?.name}`}
                        content={`
                ${actualData.getDate()}/
                ${actualData.getMonth()}/
                ${actualData.getFullYear()} 
                ${actualData.getHours()}:
                ${actualData.getMinutes()}`}
                    />
                    <CardInfo
                    mainContent="Saldo" 
                    content="R$ 2000,00"
                    />
                   </>
                   :
                    <Spinner size='xl' color='#FFFFFF'
                    />}
            </SimpleGrid>
        </Center>
    )
}

import { api } from "@/api"
import { CardInfo } from "@/components/CardInfo"
import { Center, SimpleGrid } from "@chakra-ui/react"
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

    return (
    userData && <Center>
            <SimpleGrid columns={2} gap={4} paddingTop={16}   >
                <CardInfo text="Informações de Acesso" />
                <CardInfo text="Informações da conta" />
            </SimpleGrid>
        </Center>
    )
}

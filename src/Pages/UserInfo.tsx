import { api } from "@/api"
import { CardInfo } from "@/components/CardInfo"
import { AppContext } from "@/context/AppContext";
import { Center, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

interface IConta {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

export const UserInfo = () => {
    const [userData, setUserData] = useState<IConta>()
    const { isLoggedIn } = useContext(AppContext);
    const { id } = useParams();

    const navigate = useNavigate();

    if (userData && userData.id !== id) {
        navigate('/');
    }

    useEffect(() => {
        const getData = async () => {
            const data: any | IConta = await api;
            setUserData(data);
        }
        getData();
    }, [])

    return (
        isLoggedIn && userData && <>
            <Center marginTop='2em'>
                <CardInfo mainContent={userData.name} content={userData.email}>
                    <Text fontSize='2em' fontWeight='bold'>Informações da Conta</Text>
                </CardInfo>
            </Center>
        </>
    )
}

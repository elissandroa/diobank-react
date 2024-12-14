import { api } from "@/api"
import { CardInfo } from "@/components/CardInfo"
import { AppContext } from "@/context/AppContext";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

interface IUser {
    email: string;
    password: string;
    name: string;
    id: string;
}

export const Conta = () => {

    const [userData, setUserData] = useState<null | IUser>();
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);



    if (userData && userData.id !== id) {
        navigate('/');
    }

    useEffect(() => {
        const getApi = async () => {
            const data: any | IUser = await api;
            setUserData(data);
        }

        getApi();
    }, [])

    const actualData = new Date();

    if (!isLoggedIn && userData && navigate('/home'))
        setIsLoggedIn(true);
        return (
            <Center>
                <SimpleGrid columns={2} gap={4} paddingTop={16}   >
                    {userData ?
                        <>
                            <CardInfo
                                mainContent={`Bem vindo ${userData?.name.split(" ")[0]}`}
                                content={`
                ${actualData.getDate()}/
                ${actualData.getMonth()+1}/
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

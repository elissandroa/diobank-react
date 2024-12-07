import { login } from "./login";
const mockEmail = "teste@email.com"

describe('login', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    it('Deve exibir um alert com boas vindas', async () => {
        await login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith(`Bem vindo!`);
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@teste.com');
        expect(mockAlert).toHaveBeenCalledWith('Email Inválido!');
    })
})
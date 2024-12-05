import { fncMsgBoasVindas } from "./fncMsgBoasVindas";

describe('fncMsgBoasVindas', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = "teste@gmail.com";

    it('Deve exibir um alert com boas vindas', () => {
        fncMsgBoasVindas(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`);
    })
    it('Não deve exibir a mensagem de boas vindas sem o email', () => {
        fncMsgBoasVindas(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!');

    })
})
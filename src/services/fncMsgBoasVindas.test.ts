import { fncMsgBoasVindas } from "./fncMsgBoasVindas";

describe('fncMsgBoasVindas', () => {
    const mockAlert = jest.fn();
    window.alert = mockAlert;
    it('Deve exibir um alert com boas vindas', () => {
        fncMsgBoasVindas();
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo Elissandro!');
    })
})
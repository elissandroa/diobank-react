import { changeLocalStorage, createLocalStorage, getAllStorage } from "./storage"

const diobank = {
    login: false
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
    it('Deve retornar o objeto no localstorage com a chave diobank', () => {
        getAllStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    });

    it('Deve criar o objeto no localstorage', () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank));
    });

    it('Deve alterar o valor do objeto no locaStorage', () => {
        changeLocalStorage(diobank);
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
})
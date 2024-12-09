interface IConta {
    email: string;
    password: string;
    name: string;
    balance: number;
    id:string;
}

const conta: IConta = {
    email: "teste@gmail.com",
    password: "123456",
    name:"Elissandro",
    balance: 2000.00,
    id:"1"
}

export const api = new Promise((resolve => {
    setTimeout(() => {
        resolve(conta);
    },3000)
}))
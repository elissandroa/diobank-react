interface IConta {
    email: string;
    password: string;
    name: string;
    balance: number;
    id:string;
}

const conta: IConta = {
    email: "elissandro@gmail.com",
    password: "123456",
    name:"Elissandro Aparecido Anastácio",
    balance: 2000.00,
    id:"1"
}

export const api = new Promise((resolve => {
    setTimeout(() => {
        resolve(conta);
    },3000)
}))
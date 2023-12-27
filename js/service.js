//importar o arquivo que tem os metodos de exceptions
import { handleErrors } from "./exception.js";
var URL = 'http://localhost:3000/clientes';

export const getAllCliente = async () => {
    try {
        // Fazendo uma solicitação GET para obter produtos da AP
        const response = await fetch(URL);

        //lidando com oerros na resposta
        handleErrors(response);

        //converter os dados para json
        return await response.json();
    } catch (error) {
        console.log('Error >>>', error);
    }
};

export const creatCliente = async (cliente) => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error))
};

export const deleteCliente = async (cliente) => {
    fetch(URL + `/${cliente.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
}

export const updateCliente = async (cliente) => {
    fetch(URL + `/${cliente.id}`, {
        method: 'PATCH', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
        .then(response => response.json())
        .then(data => console.log('sucesso: ', data))
        .catch((error) => console.log('Erro: ', error));
}

import { getAllCliente, creatCliente, deleteCliente, updateCliente } from "./service.js";

window.onload = () => {
    loadCliente();
};
const loadCliente = () => {
    const dataContainer = document.getElementById('data-container');
        getAllCliente().then(resp =>{
        resp.forEach(cliente => {
            const clienteElement = 
                document.createElement('div');
                clienteElement.innerHTML = 
`<strong>${cliente.nome}</strong><p>${cliente.preco}</p>`;
             dataContainer.appendChild(clienteElement);
        });
    })
};

document.getElementById('btnCreate').addEventListener('click', ()=> {

    const jogo = {
        "nome": "The legend of Zelda",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 100
    };
    creatCliente(jogo);
});

document.getElementById('btnDelete')
.addEventListener('click', ()=> {
const jogo = {
    "nome": "The legend of Zelda 2",
    "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
    "preco": 300,
    "id": 3
  };
  deleteCliente(jogo);
});

document.getElementById('btnUpdate')
.addEventListener('click', ()=>{
    const jogo = {
        "nome": "The legend of Zelda 2",
        "img": "https://codetheworld.io/wp-content/uploads/2023/12/Dark-Souls.png",
        "preco": 450,
        "id": 3
      };

      updateCliente(jogo)
});
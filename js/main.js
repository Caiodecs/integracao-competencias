
import { getAllCliente, creatCliente, deleteCliente, updateCliente } from "./service.js";

window.onload = () => {
    loadCliente();
};
const loadCliente = () => {
    // pegar o elemento no arquivo index.html com o id="tBody"
    let tBody = document.querySelector('#tBody');
    
    getAllCliente().then(resp =>{
        resp.forEach(cliente => {
            // criar um elemento <tr> para colocar dentro de <tbody>
            let tr = document.createElement("tr");

            // criar elementos <td> para serem colocados dentro de <tr>
            let tdCod = document.createElement("td");
            let tdNome = document.createElement("td");
            let tdEmail = document.createElement("td");
            let tdTelefone = document.createElement("td");
            let tdBotao = document.createElement("td");
            
            // adicionar os valores um a um que vierem do service
            tdCod.textContent = cliente.id;
            tdNome.textContent = cliente.nome;
            tdEmail.textContent = cliente.email;
            tdTelefone.textContent = cliente.telefone;
            tdBotao.innerHTML = `<button class="btn btn-danger" onclick="remover(this)" >Remover</button>`
            
            
            tr.appendChild(tdCod);
            tr.appendChild(tdNome);
            tr.appendChild(tdEmail);
            tr.appendChild(tdTelefone);
            tr.appendChild(tdBotao);

            tBody.appendChild(tr);
        });
    })
};


document.getElementById('btnCreate').addEventListener('click', () => {

    const cliente = {
        "nome": "Caio",
        "email": "caio@aluno",
        "telefone": 3006743453434
    };
    creatCliente(cliente);
});

document.getElementById('btnDelete')
    .addEventListener('click', () => {
        const cliente = {
            "id": 3

        };
        deleteCliente(cliente);
    });

document.getElementById('btnUpdate')
    .addEventListener('click', () => {
        const cliente = {
            "nome": "Caiodecs",
            "email": "caio@aluno",
            "telefone": 3006743453434,
            "id": 3
        };

        updateCliente(cliente)
    });
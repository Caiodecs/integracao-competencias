
import { getAllCliente, creatCliente, deleteCliente, updateCliente } from "./service.js";

var editedObject = null; //indica o objeto para edicao

window.onload = () => {
    loadCliente();
};

const loadCliente = () => {
    // pegar o elemento no arquivo index.html com o id="tBody"
    let tBody = document.querySelector('#tBody');

    getAllCliente().then(resp => {
        resp.forEach(cliente => {
            // criar um elemento <tr> para colocar dentro de <tbody>
            let tr = document.createElement("tr");

            // criar elementos <td> para serem colocados dentro de <tr>
            let tdCod = document.createElement("td");
            let tdNome = document.createElement("td");
            let tdEmail = document.createElement("td");
            let tdTelefone = document.createElement("td");
            let tdDelete = document.createElement("td");
            let tdEdit = document.createElement("td");

            // criar os botões de editar e remover
            let btnEdit = document.createElement("button")
            btnEdit.textContent = "Editar"
            btnEdit.id = "edit"
            btnEdit.type = "submit"
            btnEdit.onclick = () => populateForm(cliente);
            // ao clicar no botao, ele chama a funcao populateForm e passa o cliente selecionado

            let btnDelete = document.createElement("button")
            btnDelete.textContent = "Remover"
            btnDelete.id = "remover"
            btnDelete.type = "submit"
            btnDelete.onclick = () => removerCliente(cliente);
            // chama a funcao removerCliente e passa o cliente a ser deletado



            // adicionar os valores um a um que vierem do service no <td>
            tdCod.textContent = cliente.id;
            tdNome.textContent = cliente.nome;
            tdEmail.textContent = cliente.email;
            tdTelefone.textContent = cliente.telefone;
            tdEdit.appendChild(btnEdit);
            tdDelete.appendChild(btnDelete);

            // colocando as colunas na linha
            tr.appendChild(tdCod); 
            tr.appendChild(tdNome);
            tr.appendChild(tdEmail);
            tr.appendChild(tdTelefone);
            tr.appendChild(tdEdit);
            tr.appendChild(tdDelete);
            
    
            tBody.appendChild(tr);

        });
    })
};


const  populateForm = (cliente) => {
    editedObject = cliente;

    document.getElementById('nome').value = cliente.nome;
    document.getElementById('email').value = cliente.email;
    document.getElementById('telefone').value = cliente.telefone;
}

// funcao para remover o cliente
const removerCliente = (cliente) => {
deleteCliente(cliente);
}

document.getElementById('btnCreate').addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const cliente = {
        "nome": nome,
        "email": email,
        "telefone": telefone
    };

    // se editedObject for diferente de null 
    if (editedObject !== null) {
        const objetosMesclados = Object.assign(editedObject, cliente);

        updateCliente(objetosMesclados);
        editedObject = null;
    }
    else {

        // criar novo cliente
        creatCliente(cliente);
    }

});
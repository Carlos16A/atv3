class Tarefa {
  constructor(descricao) {
    this.descricao = descricao;
  }
}

let tarefas = [];
let indiceEdicao = -1;

const btnSalvar = document.getElementById("btnSalvar");
//continue a implementar...

// Atualizar a lista de tarefas
function atualizarLista() {
  alert("Implemente aqui...");
}

// Limpar input e resetar button
function limparInput() {
  alert("Implemente aqui...");
}

// Adicionar ou editar tarefa
btnSalvar.addEventListener("click", () => {
  
  alert("Implemente aqui...");

  atualizarLista();
  limparInput();
});

// Editar
function editarTarefa(index) {

  alert("Implemente aqui...");

  btnSalvar.textContent = "Atualizar";
}

// Excluir
function excluirTarefa(index) {

  alert("Implemente aqui...");
  
  atualizarLista();
  limparInput();
}

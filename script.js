const inputTarefa = document.getElementById("nova-tarefa");
const btnAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

function criarTarefa(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";

  const btnApagar = document.createElement("button");
  btnApagar.textContent = "Apagar";

  btnEditar.addEventListener("click", () => editarTarefa(span));
  btnApagar.addEventListener("click", () => apagarTarefa(li));

  li.appendChild(span);
  li.appendChild(btnEditar);
  li.appendChild(btnApagar);

  listaTarefas.appendChild(li);
}

btnAdicionar.addEventListener("click", () => {
  const texto = inputTarefa.value.trim();
  if (texto !== "") {
    criarTarefa(texto);
    inputTarefa.value = ""; 
  } else {
    alert("Digite uma tarefa!");
  }
});

function editarTarefa(span) {
  const novoTexto = prompt("Edite a tarefa:", span.textContent);
  if (novoTexto !== null && novoTexto.trim() !== "") {
    span.textContent = novoTexto;
  }
}

function apagarTarefa(li) {
  listaTarefas.removeChild(li);
}

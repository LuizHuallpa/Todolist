console.log("Projeto To-do")

let btnaddtask = document.querySelector("#adicionar-tarefa")
let inputTarefa = document.querySelector('#tarefa-digitada')

let divTarefas = document.querySelector(`#tarefas`)
    //## Criar função chamada(criartarefa) que deve exibir um alerta "Tarefa criada"
    //e essa função de executada quando usuario quando usuario fazer um click botão de adicionar no footer

function addAcaoDeFinalizarTarefa() {
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa')

    for (let i = 0; i < listaDeBotoes.length; i++) {
        let botao = listaDeBotoes[i];

        botao.addEventListener('click', function() {
            if (window.confirm("voce quer excluir?")) {
                botao.parentElement.parentElement.remove()
            }
        })
    }
}

addAcaoDeFinalizarTarefa()

function criartarefa() {
    if (inputTarefa.value.trim() == "") {
        return alert("Você deve digtar uma tarefa primeiro")
    }

    let tarefa = `
    <div class="col-md-4 mb-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
        ${inputTarefa.value}
        </div>
        <div class="botao-tarefa">
             <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
        </div>
    </div>
</div>
    `
    divTarefas.innerHTML += tarefa
    inputTarefa.value = ""
    alert("Tarefa Criada: " + inputTarefa.value)
    addAcaoDeFinalizarTarefa()
}

btnaddtask.addEventListener('click', criartarefa)
inputTarefa.addEventListener('keypress', function(event) {
    if (event.key == "Enter") {
        criartarefa()
    }

})
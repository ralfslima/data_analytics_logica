// Vetor
var vetor = []

// Função de cadastro
function cadastrar(){
    
    // Obter nome, idade e cidade
    var nome   = document.getElementById('nome').value
    var idade  = document.getElementById('idade').value
    var cidade = document.getElementById('cidade').value

    // Criar um objeto
    var pessoa = {
        "nome":nome,
        "idade":idade,
        "cidade":cidade
    }

    // Cadastrar objeto no vetor
    vetor.push(pessoa)

    // Atualizar a tabela
    selecionar()

    // Teste via console
    console.table(vetor)

}

// Função de seleção
function selecionar(){

    // Obter o elemento HTML de tabela
    var tabela = document.getElementById('tabela')

    // Limpar tabela
    tabela.innerHTML = ''

    // Criar uma linha <tr>
    var linha = tabela.insertRow(-1)

    // Criar uma coluna <td>
    var coluna = linha.insertCell(0)

    // Criar o conteúdo da coluna
    coluna.innerHTML = "Oi"

}
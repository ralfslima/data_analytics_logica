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

    // Laço de repetição
    for(var indice = 0; indice < vetor.length; indice++){

        // Criar uma linha <tr>
        var linha = tabela.insertRow(-1)

        // Criar colunas <td>
        var colunaNome    = linha.insertCell(0)
        var colunaIdade   = linha.insertCell(1)
        var colunaCidade  = linha.insertCell(2)
        var colunaRemover = linha.insertCell(3)

        // Criar o conteúdo da coluna
        colunaNome.innerHTML    = vetor[indice].nome
        colunaIdade.innerHTML   = vetor[indice].idade
        colunaCidade.innerHTML  = vetor[indice].cidade
        //colunaRemover.innerHTML = '<button onclick="remover('+indice+')">Remover</button>'           
        colunaRemover.innerHTML = `<button onclick='remover(${indice})'>Remover</button>`
    }

}

// Função de remoção
function remover(indice){

    // Remover pessoa do vetor
    vetor.splice(indice, 1)

    // Atualizar tabela
    selecionar()

}
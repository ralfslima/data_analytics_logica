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

    // Teste via console
    console.table(vetor)

}


var Candidato = /** @class */ (function () {
    function Candidato(nome, idade, experiencia, habilidade) {
        this.nome = nome;
        this.idade = idade;
        this.experiencia = experiencia;
        this.habilidade = habilidade;
    }
    return Candidato;
}());
function validarElegibilidade(candidato) {
    if (candidato.experiencia <= 3 && candidato.idade < 18) {
        console.log("Não elegível");
    }
    else {
        console.log("Elegível");
    }
}
var candidato1 = new Candidato("Jonathas", 18, 5, ["Javascript", "HTML", "CSS"]);
var candidato2 = new Candidato("Izabela", 15, 2, ["HTML", "CSS"]);
var resultadoElegibilidade = validarElegibilidade(candidato1);
var resultadoElegibilidade2 = validarElegibilidade(candidato2);
console.log(resultadoElegibilidade);
console.log(resultadoElegibilidade2);
function avaliarEntrevista(candidato, respostas) {
    var pontuacaoTotal = 0;
    // Verificar cada resposta e atribuir uma pontuação com base nos critérios definidos
    for (var i = 0; i < respostas.length; i++) {
        var resposta = respostas[i];
        var respostaCorreta = "Resposta correta"; // Exemplo de resposta correta pré-definida
        if (resposta === respostaCorreta) {
            pontuacaoTotal += 2; // Atribui 2 pontos para cada resposta correta
        }
        else {
            pontuacaoTotal += 0; // Atribui 0 pontos para cada resposta incorreta
        }
    }
    if (pontuacaoTotal >= 3) {
        console.log("candidato passou na entrevista!");
    }
    else {
        console.log("Que pena, tente novamente mais tarde.");
    }
    return pontuacaoTotal;
}

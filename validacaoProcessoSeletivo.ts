class Candidato {
  nome: string;
  idade: number;
  experiencia: number;
  habilidade: string[];

  constructor(
    nome: string,
    idade: number,
    experiencia: number,
    habilidade: string[]
  ) {
    this.nome = nome;
    this.idade = idade;
    this.experiencia = experiencia;
    this.habilidade = habilidade;
  }
}

function validarElegibilidade(candidato: Candidato) { 
   if(candidato.experiencia <= 3 && candidato.idade < 18){
    console.log("Não elegível")
   }
   else{ 
    console.log("Elegível")
   }
}


const candidato1 = new Candidato("Jonathas", 18, 5, ["Javascript", "HTML", "CSS"])
const candidato2 = new Candidato("Izabela", 15, 2, ["HTML", "CSS"])

const resultadoElegibilidade = validarElegibilidade(candidato1)
const resultadoElegibilidade2 = validarElegibilidade(candidato2)

function avaliarEntrevista(candidato: Candidato, respostas: string[]): number {
    let pontuacaoTotal = 0;
  
    for (let i = 0; i < respostas.length; i++) {
      const resposta = respostas[i];
  
      const respostaCorreta = "Resposta correta"; 
  
      if (resposta === respostaCorreta) {
        pontuacaoTotal += 2;
      } else {
        pontuacaoTotal += 0; 
      }
    }

    if(pontuacaoTotal >= 3) {
        console.log("candidato passou na entrevista!")
    }
    else {
        console.log("Que pena, tente novamente mais tarde.")
    }
  
    return pontuacaoTotal;
  }
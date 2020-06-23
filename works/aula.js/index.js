// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média


const nome01 = "Anna"
const notaAluno01 = 9.8
const nome02 = 'Diego'
const notaAluno02 = 10
//const nome03 = `Valeska e ${nome}`
const aluno03 = 'Fulano'
const notaAluno03 = 2


const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

//se a media for maior que 5, parabenizar a turma
if (media > 5){
    //faz alguma coisa
    console.log (`A nota foi de ${media}. Parabéns`)
} else{
    //faz outra coisa
    console.log('A média é menor que 5')
}


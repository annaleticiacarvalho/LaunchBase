const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura)

if (imc >= 30){
    console.log ('Carlos você está acima do peso')
}
else {
    console.log ('Carlos você não está acima do peso')
}

const nome2 = 'Silvana';
const sexo = 'F';
const idade = '48';
const contribuicao = '23';

const calculoAposentadoria = idade + contribuicao

const homemPodeAposentar = sexo === 'M' && calculoAposentadoria ===  95 && contribuicao >=35;
const mulherPodeAposentar = sexo === 'F' && calculoAposentadoria === 85 && contribuicao >=30;

if (homemPodeAposentar || mulherPodeAposentar){
    console.log (`${nome2}, você pode se aposentar!`)
} else {
    console.log (`${nome2}, você não pode se aposentar!`)
}

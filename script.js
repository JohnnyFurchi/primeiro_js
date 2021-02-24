/*
var nota1 = 8.0;
var nota2 = 1.0;

var media = (nota1 + nota2) / 2;
var conceito = ''
if(media >= 8) {
    conceito = 'Ótimo'
}else if(media >= 6.5) {
    conceito = 'Bom'
} else {
    conceito = 'Regular'
}

conceito = 'Mais ou menos'

console.log(media)

console.log(conceito)

switch(conceito) {

    case 'Ótimo':
        console.log('Parabéns, vc é um ótimo aluno!')
        break;
    case 'Bom':
        console.log('Você esta quase perfeito.')
        break;
    case 'Regular':
        console.log('Estude mais um pouco.')
        break;
    default:
        console.log('Houve algum erro.')
        break;
}

var numero = Math.random() *100;


console.log(numero)

while(numero < 90){
    console.log(numero);
    numero = Math.random() * 100;
}
console.log(numero);
console.log('Acabou')
*/
/*
var alunos = ['Igor', 'José', 'Alonso', 'Tati', 'Dragão', 'Leon', 'Chris'];

for(var aluno in alunos){ //Índice
    console.log(aluno)
}

var alunos = ['Igor', 'José', 'Alonso', 'Tati', 'Dragão', 'Leon', 'Chris'];

for(var aluno of alunos){ //Conteúdo
    console.log(aluno)
}
*/

var alunos = ['João', 'Gina', 'Mago'];

for(var aluno = 0; aluno < alunos.length; aluno++){
    console.log(aluno)
}
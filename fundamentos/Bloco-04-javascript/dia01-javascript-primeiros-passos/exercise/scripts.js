//valores
const aValue = -90; //valor de a
const bValue = -45; //valor de b
const cValue = -45;
console.log("o valor de A é: " + aValue);
console.log("o valor de B é: " + bValue);
console.log("");
//exercicio 1: faça cinco programas, um com cada operação aritm
const calcType = "subtração"; //mudando para Soma, subtração, divisão, multiplicação, divisão, modulo
console.log("calculo:");

if(calcType ==="soma"){ //calcula a soma
  calcResult = aValue + bValue ;
  console.log("o resultado é:"+ (calcResult));

}else if(calcType ==="subtração"){ //calcula a subtração
  calcResult = aValue - bValue ;
  console.log("o resultado é:"+ (calcResult));

}else if(calcType ==="multiplicação"){ //calcula a multiplicação
  calcResult = aValue * bValue ;
  console.log("o resultado é:"+ (calcResult)) ;

}else if(calcType ==="divisão"){ //calcula a divisão
  calcResult = aValue / bValue ;
  console.log("o resultado é:"+ (calcResult));

}else if(calcType ==="modulo"){ //calcula modulo
  calcResult = aValue % bValue ;
  console.log("o resultado é:"+ (calcResult));
}

//exercicio 2: Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
console.log("");
console.log("qual o maior dos 2?");
if (aValue > bValue){
  console.log(aValue + " é maior");

}else if (aValue < bValue){
  console.log(bValue + " é maior");

}else if (aValue === bValue){
  console.log("os numeros são iguais");
}
console.log("");
//exercicio 3: Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
console.log("qual o maior dos 3?");
if (aValue > bValue){ //valor de A é maior que B?
  if(aValue > cValue){ //valor de A é maior que c?
    console.log(aValue + " é maior");
  }else{
    console.log(cValue + " é maior");
  }
}else if (aValue < bValue){ //valor de A é menor que B?
  if(bValue > cValue){ //valor de B é maior que c?
    console.log(bValue + " é maior");
  }else{
    console.log(cValue + " é maior");
  }

}else if (aValue === bValue){ //valor de a é igual ao de b?
  if(aValue === cValue){ //valor de A é maior que c?
    console.log("os numeros são iguais");
  }else if (aValue > cValue){
    console.log(aValue + " é maior");
  }else if (aValue < cValue){
    console.log(cValue + " é maior");
  }
}
console.log("");
//exercicio 04: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
console.log("é positivo?");
if(aValue > 0){
  console.log("positive");
}else if(aValue === 0){
  console.log("o valor é zero");
}else if(aValue < 0){
  console.log("negative");
}
console.log("");

//exercicios 05: 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
console.log("angulos de um triangulo");
const somaTriangle = aValue + bValue + cValue;
let eUmTriangulo;
if (somaTriangle === 180){
  eUmTriangulo = true
}else if(somaTriangle !== 180 && somaTriangle >0){
  eUmTriangulo = false
}else{
  eUmTriangulo = "erro"
}
console.log("é um triangulo? " + eUmTriangulo);
console.log("")

//exercicio 6: Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const chessPieces = "KNIGHT"
let movement;
switch (chessPieces.toLocaleLowerCase()){
  case "pawn":
  movement = "one square in your front";
  break;
  case "bishop" :
  movement = "diagonals";
  break;
  case "knight" :
  movement = "L move";
  break;
  case "rook" :
  movement = "collumn and lines"  ;
  break;
  case "queen" :
  movement = "any directions";
  break;
  case "king" :
  movement = "any directions, but move just one square";
  break;
  default:
  movement = "erro";
}
console.log("move in " + movement);
console.log("");

//exercicio 7: Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
console.log ("porcentagem em letra");
const porcentagem = 69;
let nota;

if(porcentagem >= 90){
  nota = "a";
}else if(porcentagem >= 80){
  nota = "b";
}else if(porcentagem >= 70){
  nota = "c";
}else if(porcentagem >= 60){
  nota = "d";
}else if(porcentagem >= 50){
  nota = "e";
}else if(porcentagem < 50){
  nota = "f";
}else if(porcentagem < 0 || porcentagem > 100){
  nota = "erro"
}
console.log(nota);
console.log("")

//exercicio 8: 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
console.log("é par?")
if ((aValue%0 === 0) || (bValue === 0) || (cValue % 0 === 0)){
  console.log(true)
}else{
  false
}
console.log("")

//exercicio 9: Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
console.log("é impar?");
if ((aValue%0 !== 0) || (bValue !== 0) || (cValue % 0 !== 0)){
  console.log(true);
}else{
  false;
}
console.log("");

//exercicio 10: Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
console.log("calculo de lucros:")
const custoProduto = 2;
const valorProduto = 4;
const quantidadeProduto = 1000;
const impostoProduto = (custoProduto / 100) * 20; //imposto é 20% sobre o custo
const lucroProduto = (valorProduto - (custoProduto + impostoProduto)) * quantidadeProduto; //valor - (custo + imposto) multiplicado pela quantidade
if((custoProduto < 0) || (valorProduto< 0)||(quantidadeProduto<0)){
  console.log("erro");

}else{
  console.log(lucroProduto);
}

console.log("---- Operadores Aritméticos ----");
var num1 = 4, num2 = 5; // Declaração de múltiplas variáveis

// Operação de soma (+)
var soma = num1 + num2;
console.log("Soma: " + soma); 

// Operação de subtração (-)
var subtracao = num1 - num2;
console.log("Subtração: " + subtracao);

// Operação de multiplicação (*)
var multiplicacao = num1 * num2;
console.log("Multiplicação: " + multiplicacao);  

// Operação de divisão (/)
var divisao = num1 / num2;
console.log("Divisão: " + divisao); 

console.log("---- Operadores Relacionais ----"); 
var nome = "João Marcio", nome2 = "joao marcio";

//Operação de igualdade (==)
var igual = nome == nome2; 
console.log("igualdade: " + igual);

//Operação de diferença (!=)
var diferente = nome != nome2;
console.log("Diferença: " + diferente);

//Operação maior que (>)
var maior = 2 > 1;
console.log("Maior que: " + maior);

//Operação de maior ou igual (>=)
var maiorOuIgual = 2 >= 2;
console.log("Maior ou igual: " + maiorOuIgual);

//Operação de menor ou igual (<=)
var menorOuIgual = 2 <= 3;
console.log("Menor ou igual: " + menorOuIgual);

console.log("---- Operadores Lógicos ----")
var boaComunicacao = true, trabalhoEmEquipe = false;

//Operação de conjução (E)
var conjuncao = boaComunicacao && trabalhoEmEquipe;
console.log("Conjução (E): " + conjuncao);

//Operação de disjunção
var disjuncao = boaComunicacao || trabalhoEmEquipe;
console.log ("Disjunção (OU): " + disjuncao)

//Operação de negação (!)
var negacao = !trabalhoEmEquipe;
console.log("Negação: " + negacao);

var negacao2 = !conjuncao;
console.log("Negação + Conjunção: " + negacao2);


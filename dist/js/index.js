"use strict";
let x = 10;
x = 25;
console.log(x);
// tipos basicos
// A varoavel recebe o tipo de dado ao ser passado, so ser passado o tipo, 
// a variavel não aceita outro tipo no typescript
// Inferencia
let y = 60;
// anotation
let texto = "text";
// tipos basicos
let text = 'texto';
let num = 62;
let isAdmin = true;
// array
const array = [1, 2, 3];
const arrayText = ['mar', 'ser'];
//tupla
let tupla;
tupla = [60, 'mario', ['mario', 'sergio'], [50, 60]];
console.log(text, num, isAdmin, array);
array.push(5);
array.unshift(50);
console.log(tupla);
// Object Literal -> {prop: value}
const user = {
    name: 'mario',
    age: 50,
};
// no typescript não podemos adicionar nenhum dado adiciona ao objeto literal.
// apenas modificamos os dados
console.log(user);
// any e um recurso que aceita qualquer tipo de dado
let a = 5;
a = 'te';
a = true;
/*
caso o tipo de dado seja mais de um usamos da seguinte forma
union type
let id: number | string | boolean
*/
let id;
id = 5;
let myId = 1;
// enum -> enumera coleção criando tipos de dados para coleção
// 
var Tamanhos;
(function (Tamanhos) {
    Tamanhos["P"] = "peq";
    Tamanhos["M"] = "med";
    Tamanhos["G"] = "Grd";
})(Tamanhos || (Tamanhos = {}));
const roupa = {
    nome: 'camisa',
    tamanho: Tamanhos.G
};
console.log(roupa);
// literal types co é possivel mudar o valor se estiver como null
let val;
// val = "outro valor" -> não aceita - Ex: utilizado para validação
val = 'autenticado';
val = null;
// funções -> é obrigado a passar o tipo no argumento
function sum(a, b) {
    return a + b;
}
// informando o tipo do retorno na função
function t(nome) {
    return `seu nome e ${nome}`;
}
console.log(sum(5, 100));
console.log(t('zezim'));
// Explicitando uma função que nao possui retorno utilizado para eventos no dom ex: adicionando classe ou 
// elemento
function vazio(msg) {
    console.log(msg);
}
vazio('sem retorno');
// passando parametro opcional
function opc(t, s) {
    // nesse caso e preciso fazer a verificação do parametro, se true imprime
    if (s) {
        console.log(`${t} e ${s}`);
        return;
    }
    console.log(`${t}`);
}
opc('olha o t', ' e olha  o S');
opc('olha so o t');
//criando a função que envia o parametro para a interface
function calculo(nums) {
    return nums.n1 + nums.n2;
}
console.log(calculo({ n1: 75, n2: 95 })); // enviando os numeros como parametro para a função

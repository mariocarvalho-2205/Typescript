let x: number = 10

x = 25
console.log(x)
// tipos basicos

// A varoavel recebe o tipo de dado ao ser passado, so ser passado o tipo, 
// a variavel não aceita outro tipo no typescript

// Inferencia
let y = 60

// anotation
let texto: string = "text"

// tipos basicos
let text: string = 'texto'
let num: number = 62
let isAdmin: boolean = true
// array
const array: number[] = [1, 2, 3]
const arrayText: string[] = ['mar', 'ser']

//tupla
let tupla: [number, string, string[], number[]]

tupla = [60, 'mario', ['mario', 'sergio'], [50, 60]]

console.log(text, num, isAdmin, array)
array.push(5)
array.unshift(50)

console.log(tupla)

// Object Literal -> {prop: value}
const user: { name: string, age: number } = {
    name: 'mario',
    age: 50,
};

// no typescript não podemos adicionar nenhum dado adiciona ao objeto literal.
// apenas modificamos os dados
console.log(user)

// any e um recurso que aceita qualquer tipo de dado

let a: any = 5
a = 'te'
a = true

/*
caso o tipo de dado seja mais de um usamos da seguinte forma
union type
let id: number | string | boolean
*/

let id: number | string 
id = 5

// type alias -> e a criação de um tipo para nao repetir no codigo o union type

//Ex:
type doisTipos = number | string 

let myId: doisTipos = 1

// enum -> enumera coleção criando tipos de dados para coleção
// 

enum Tamanhos {
    P = "peq",
    M = "med",
    G = "Grd"
}

const roupa = {
    nome: 'camisa',
    tamanho: Tamanhos.G
}
console.log(roupa)

// literal types co é possivel mudar o valor se estiver como null

let val: 'autenticado' | null

// val = "outro valor" -> não aceita - Ex: utilizado para validação
val = 'autenticado'
val = null

// funções -> é obrigado a passar o tipo no argumento

function sum (a: number, b: number) {
    return a + b
}

// informando o tipo do retorno na função
function t(nome: string): string {
    return `seu nome e ${nome}`
}
console.log(sum(5, 100))
console.log(t('zezim'))

// Explicitando uma função que nao possui retorno utilizado para eventos no dom ex: adicionando classe ou 
// elemento

function vazio (msg: string): void{
    console.log(msg)
}
vazio('sem retorno')

// passando parametro opcional

function opc (t: string, s?: string): void {
    // nesse caso e preciso fazer a verificação do parametro, se true imprime
    if(s) {
        console.log(`${t} e ${s}`);
        return;
    } 
    console.log(`${t}`)
    
}

opc('olha o t', ' e olha  o S')
opc('olha so o t')

// interface - criadas para calculos matematicos, onde determinamos a quantidade de parametros

//criando a interface
interface numeros {
    n1: number;
    n2: number;
}

//criando a função que envia o parametro para a interface
function calculo (nums: numeros) {
    return nums.n1 + nums.n2;
}

console.log(calculo({ n1: 75, n2: 95}))  // enviando os numeros como parametro para a função
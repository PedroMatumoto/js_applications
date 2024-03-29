

/* 
A LINGUAGEM TEM TIPAÇÃO FRACA E DINÂMICA 
- Fraca: não é necessário declarar o tipo de dado
- Dinâmica: o tipo de dado pode mudar em tempo de execução
- Transpilação: conversão de um código de uma linguagem para outra
- JIT: Just in Time
- Compila em tempo de execuçãos
*/

/*
//// const, let e var 
const nome = "José"
const sobrenome = 'Silva'
const nomeFinal = 'Mendes'
// Não é possível alterar o valor de uma constante
// nome = "Ana"

// let de 'ser'
let idade = 19
idade = 20
console.log(nome)
console.log(idade)
*/

/*
var linguagem = "JavaScript"
console.log(`Aprendendo ${linguagem}`)
var linguagem = "Java"
console.log(`Aprendendo ${linguagem}`)
*/

/*
var idade = 19
console.log(`Oi,${nome}!`)

if (idade >= 18) {
    var  nome = "José" //içamento (hoisting)
    console.log(`Maior de idade ${nome}!`)
}
console.log(`Até mais, ${nome}!`)
*/

/*
// coerção implícita
const n1 = 2
const n2 = '3'
const n3 = n1 + Number(n2)
console.log(n3)
*/

/*
console.log(1==1)
console.log(1=='1')
console.log(1==='1')
// != !==
console.log('1'==='1')
*/

/*
console.log(true==1)
console.log(1==[1])
console.log(null==null)
console.log(undefined==undefined)
console.log(undefined==null)
*/

// console.log([]==[])


// let Pessoa ={
//     nome: "João",
//     "idade": 17
// }

// console.log(Pessoa.nome)
// console.log(Pessoa.idade)
// console.log(Pessoa['nome'])



// console.log(Pessoa2.["endereco"].rua)



// let concessionaria = {
//     "nome": "Concessionária",
//     "Cnpj": "12.345.678/0001-99",

//     "Endereco": {
//         "rua": "Rua 1",
//         "numero": 12,
//         "complemento": null
//     },

//     "carros": [
//         {
//             "modelo": "Fusca",
//             "ano": 1970,
//             "AnoFabricacao": 1969,
//         },
//         {
//             "modelo": "Gol",
//             "ano": 2010,
//             "AnoFabricacao": 2009,
//         }
//     ]
// }

// console.log(concessionaria.carros[1].modelo)

// for (let i = 0; i < concessionaria.carros.length; i++) {
//     if (concessionaria.carros[i].modelo)
//         console.log(concessionaria.carros[i].modelo)
// }

// let calculadora = {
//     // arrow function
//     somar:(a,b) => a+b,
//     // function expression
//     subtrair: function(a,b) {return a-b},
// }


// const executa = (f) =>{
//     f()
// }


// // ==========EXEMPLO DE CALLBACK==================

// const fs = require('fs')

// const abrirArquivo = (nomeArquivo)=>{
//     const exibirConteudo = function(erro, conteudo){
//         if (erro){
//             console.log(`Erro ao abrir o arquivo ${nomeArquivo}`)
//             console.log(`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(conteudo.toString())
//             const dobro = Number(conteudo.toString())*2
//             const finalizar = function(erro){
//                 console.log(`Salvou `)

//             }
//             fs.writeFile('dobro.txt',dobro.toString(),finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo,exibirConteudo)
// }

// abrirArquivo('numero.txt')
// //================================================



// const calculadoDemorado = (n) =>{
//     let p = new Promise(function(resolve,reject){
//         let res = 0
//         for(let i = 1; i <= n; i++) res += i
//         resolve({a:res,b:res*2})
//     })
//     return p
// }

// const promise = calculadoDemorado(10)
// promise.then((res)=>{
//     console.log(res.a)
// })

// // processamento assincrono
// function calculoRapidinho(n){
//     return n>=1 ? Promise.resolve(n/2*(n+1)):Promise.reject('Erro')
// }

// calculoRapidinho(15).then((res)=>{ console.log(res)}).catch((reject)=>{console.log(reject)})





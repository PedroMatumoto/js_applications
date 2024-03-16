

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

let calculadora = {
    // arrow function
    somar:(a,b) => a+b,
    // function expression
    subtrair: function(a,b) {return a-b},
    
}
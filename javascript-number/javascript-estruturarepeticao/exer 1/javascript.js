var nomes = [
    "Dan",
    "Renato",
    "Carlos",
    "Felix",
    "Danilo"
]
  // console.log(nomes[3])
//function imprimi(){
  //  console.log("Olá")
//}
//imprimi()
//for (let index = 0; index < nomes.length; index++) {
  //  console.log(nomes[index])
    
//}
//console.log("------while----------")
//i = 0
//while (i < nomes.length) {
 // console.log(nomes[i])
  //  i++
//}
//console.log("---arrow function----")
//var imprimir = () => {
  //  console.log(nomes[0])
//}
//imprimir()

//var imprimir = () => {
 //   console.log(nomes[1])
//}
//imprimir()

//console.log("---Usando Map------")
for (let index = 0; index < nomes.length; index++) {
    nome(index)
}

function nome(indice) {
    console.log(nomes[indice])
}

console.log("----Map-------")
nomes.map (
    function (indice){
        console.log(indice)
    }
)
nomes.map (
    (indice) => {
        console.log(indice)
})

nomes.map(indice => console.log(indice))
nomes.map(indice => console.log(indice))

var estudantes = [{
    nome: "João",
    idade: 18
},
{
    nome: "Lívia",
    idade: 25
}
]

estudantes.map(nome => console.log(nome.nome, nome.idade))
//estudantes.map(nome => console.log(nome.idade))

estudantes.map(
    elemento => {
        console.log(elemento.nome, elemento.idade)
        console.log(elemento.idade)
    }
)
console.log(estudantes[0].idade)
console.log(estudantes[1].nome)

//var soma = (texto) => {
 //   console.log(texto)
//}

var soma = (texto) => {
    console.log(texto)
}
function soma(texto){
    console.log(texto)
}

soma("Newton José")

 var meuNome = (nomes) => {
    nomes.map( nome => console.log(nome))
}

meuNome ([
    "Camilo",
    "Lucas",
    "Sandro"
])
//console.log(meuNome[0])
var soma = (num1, num2) => {
   return (num1 + num2)
}
var resultado = soma(10,15)
console.log(resultado)
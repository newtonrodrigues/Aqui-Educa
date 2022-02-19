var nomes = ["Camila",
            "Renata",
            "Ludmilla",
            "Ingrid"           
]

nomes.push("Jéssica")
nomes.push("Fernanda")
console.log(nomes[5])
for (let index = 0; index < nomes.length; index++) {
    console.log(nomes[index])
}
console.log("---------PILHA-----------")
for (let index = nomes.length -1; index >= 0; index--) {
    console.log(nomes[index])
}
console.log("------------Lista---------")
nomes.unshift("Maria")
console.log(nomes[0])
nomes.splice(0,1)
console.log(nomes[0])
nomes.splice(0,1, "Constantine")

escola = {
    nome: "Escola Mundial",
    ano: "1965",
    valor: true,
    alunos: [
        "jose",
        "Matheus",
        "Firmino",
        "Roberto"
    ],
   times: [
       {
           nome: "Time do 1 ano",
           coresTime: [
               "Preto",
               "Vermelho",
               "Rosa"
           ]
       },
       {
           nome: "Time do 2 ano",
           coresTime: [
               "Branco",
               "Roxo",
               "Lilás"
           ]
       }
   ]
}

escola.times.push({
    nome: "Time do 3 ano",
    coresTime: [
        "Preto",
        "Cinza",
        "Bonina"
    ]
})
console.log("==Elemento Adicionado==")
for (let index = 0; index < escola.times.length; index++) {
    console.log(escola.times[index].coresTime)
    
}

console.log("---Lista de Elementos---")
for (let index = 0; index < escola.alunos.length; index++) {
    console.log(escola.alunos[index])
}
for (let index = 0; index < escola.times.length; index++) {
    console.log(escola.times[index].coresTime)    
}


console.log(nomes[0])
console.log("---Dados Estruturados---")

for (let index = 0; index < escola.alunos.length; index++) {
    console.log(escola.alunos[index])
}
console.log(escola.ano)

function somar(){
    var numero = document.getElementById("numero").innerText
     var res = parseInt(numero) + 1
    document.getElementById("numero").innerText = String(res)
}

function subtrair(){
    var numero = document.getElementById("numero").innerText
    var res = parseInt(numero) - 1
    if (res < 0) {
        alert("Não pode ser menor que 0!")
     } else {
        document.getElementById("numero").innerText = String(res)
     }
    
}

function slider(){
    var numero = document.getElementById("marcador").value
    
 document.getElementById("imagem").style=`width: ${numero}%; height: ${numero}%;`
}
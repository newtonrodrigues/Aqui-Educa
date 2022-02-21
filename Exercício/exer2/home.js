var lista = {
    numeros: [
        1,
        2,
        3
    ],
    nomes: [
        "João",
        "Michel"
    ],
    condicao: [
        "true",
        "false"
    ]
}

//console.log(lista.nomes[1] [3])
//var nome = 0
for (let index = 0; index < lista.nomes[1].length; index++) {
        console.log(lista.nomes[1][index])
        nome = lista.nomes[1]  
        
}
document.getElementById("textoAqui").innerText = nome
arcoIris = ["<br>",
    "Red<br>",
    "Orange<br>",
    "Blackberry<br>",
    "Blue<br>"
]
arcoIris.splice(3, 1, "Yellow<br>", "Green<br>" )
arcoIris.splice(6, 0, "Purple<br>")

console.log(arcoIris)

//for (let index = 0; index < arcoIris.length; index++) {
    document.getElementById("textoAqui")
.innerHTML += `<br>${arcoIris}`    
    
//}
function incluirCor() {
    var res = document.getElementById("campo").value
    arcoIris.unshift(res)
   // alert(arcoIris)
    document.getElementById("textoAqui").innerHTML +=
     `<br><br> ${arcoIris}`
}
function incluirUltimaCor() {
    var res = document.getElementById("campo").value
    arcoIris.push(res)
    document.getElementById("textoAqui").innerHTML +=
    `<br><br> ${arcoIris}`
}
function removerPCor() {
    //var res = document.getElementById("textoAqui").value
    arcoIris.splice(0,1)
    document.getElementById("textoAqui").innerHTML +=
    `<br><br> ${arcoIris}`
}
function removerUCor() {
    arcoIris.pop()
    document.getElementById("textoAqui").innerHTML +=
    `<br><br> ${arcoIris}`
}
alunos = [
    "Jose",
    "Carlos",
    "Reinaldo",
    "Noé"
]
function comparacao() {
    for (let index = 0; index <= alunos.length; index++) {
        if (document.getElementById("campo").value == alunos[index]) {
            alunos[index] = document.getElementById("campoResposta").value
        }
        
    }
    console.log(alunos)
}
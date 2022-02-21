function mudarCor() {
    console.log("Olá")
   var texto = document.getElementById("texto").style.color =
    "red" 
    var estilo = document.getElementById("texto").innerText
    document.getElementById("textoAqui").innerText = estilo
    document.getElementById("textoAqui").style.color = "red"
}

var numero = 0
function abrirAlerta() {
    for (let index = 0; index < 15; index++) {
         numero++   
    }
    document.getElementById("textoAqui").innerText = numero
}
abrirAlerta()

function enquanto() {
    numero = 0
    index = 0
    while (index < 20) {
        numero++
        index++
    }
    console.log(numero)
}

function renderizacao() {
    for (let index = 0; index < 25; index++) {
        
        if (index % 2 == 0) {
            //console.log(index)    
            document.getElementById("textoAqui")
            .innerHTML += `<br><tr>${index}</tr>`

        }
        
    }
}
renderizacao()

function nomeClasse() {
    document.getElementById("classeAlterada").className = "texto-rosa-medio"
    var elemento = document.getElementById("classeAlterada")
    elemento.style.fontWeight = "bold"
}

function imprimir() {
    var divs = document.getElementsByTagName("div")
    console.log(divs[0].innerText)

    for (let index = 0; index < divs.length; index++) {
        divs[index].innerText = index 
        
    }
    
}
imprimir()
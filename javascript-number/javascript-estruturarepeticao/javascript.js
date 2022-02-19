var nomes = [
    "Dan",
    "Leo",
    "Jadson",
    "Newton",
    "Rafa",
    "Lívia",
    "Thiago"
]
for (let index = 0; index < nomes.length; index++) {
    console.log(nomes[index])
}
console.log("teste 1")
sleep(5000)

function sleep(milisegundos){
    const dataAtual = Date.now()
    let dataAtualizada = null
    do {
        dataAtualizada = Date.now()
    } while (dataAtualizada - dataAtual < milisegundos)        
    
}
console.log(typeof "blueberry")
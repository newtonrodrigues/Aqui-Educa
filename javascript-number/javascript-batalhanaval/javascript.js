var qtdeNavios = 6
var navios = []
var posicoes = []
var qtdeLinhas = 15
var qtdeColunas = 15
var totalCelulas = qtdeLinhas * qtdeColunas
var qtdeCelulasClicaveis = totalCelulas
var tamanhoNavio = 4
var celulasNavio1 = []
var score = {
    municao: 100,
    pontuacao: 0,
    sucesso: [],
    falha: []
}

var jogoFinalizado = false
document.getElementById("progressBar").max = score.municao
document.getElementById("progressBar").value = score.municao
setScore()

renderizarPlano()
definirNavios()
sentidoDosNavios()
celulasDosNavios()
renderizarNavios()

function setScore(){
    document.getElementById("municao").innerText = score.municao
    document.getElementById("sucesso").innerText = score.sucesso.length
    document.getElementById("falha").innerText = score.falha.length
    document.getElementById("progressBar").value = score.municao

    if (score.municao == 0 || score.sucesso.length == (qtdeNavios * tamanhoNavio)) 
        finalizarJogo()
}

function atirar(elemento){

    var existe = false
    score.sucesso.map(celula => {
        if (celula == elemento) 
            existe = true
        
    })
    score.falha.map(celula => {
        if (celula == elemento) 
            existe = true    
        
    })
    if (!existe) {
        var navioEncontrado = false
        var posicaoNavioEncontrado = ''

        navios.map(navio => {
            navio.celulas.map(celula => {
                var stringCelula = convertCelulatoString(celula)

                if (elemento == stringCelula) {
                    navioEncontrado = true
                    posicaoNavioEncontrado = 'n' + String(navios.indexOf(navio)) 
                    + '.' + stringCelula
                    qtdeCelulasClicaveis -= 1
                }
            })
        })
        if (navioEncontrado) {
            score.sucesso.push(elemento)
            document.getElementById(elemento).className = "cellNavio"
            document.getElementById(posicaoNavioEncontrado).className = "cellNavio"
        } else {
            score.falha.push(elemento)
            document.getElementById(elemento).className = "cellAgua"
        }
        score.municao -= 1
        setScore()
    }
}

function finalizarJogo(){
    document.getElementById("quadroFinal").style.visibility = "visible"
    document.getElementById("divFraseFinal").style.visibility = "visible"

    if (score.sucesso.length == (qtdeNavios * tamanhoNavio)) {
        document.getElementById("fraseFinal").style.color = "green"
        document.getElementById("fraseFinal").innerHTML = ` \
         <span> Você ganhou!</span> \ <a href="#" onclick="window.location.reload(true);"
         style="font-size: 25px; font-weight: normal; margin-top: 15px;"> \
         Jogar novamente \ </a>`
        } else {
            document.getElementById("fraseFinal").style.color = "red"
            document.getElementById("fraseFinal").innerHTML = `\ 
            <span> Você perdeu!<\span> \ <a href"#" onclick="window
            .location.reload(true);" style="font-size: 25px; 
            font-weight: normal; margin-top: 35px;"> \ Jogar novamente
            \ </a>`
        }   
}

function convertCelulaToString(celula){
    return String(String(celula[0]).trim() + '.' 
    + String(celula[1]).trim()).trim()
}

function definirNavios(){
    for (let index = 0; index < qtdeNavios; index++) {
        navios.push({
            sentido: NaN,
            celulas: []
        })
    }
}

function colisao(indexNavio){
    var retorno = false

    for (let index = indexNavio -1; index >= 0; index--) {
        navios[indexNavio].celulas.map(celulaNavioOriginal => {
            navios[index].celulas.map(celulaNavioRef => {
                var original = convertCelulatoString(celulaNavioOriginal)
                var ref = convertCelulatoString(celulaNavioRef)

                if (original ==ref) {
                    navios[indexNavio].sentido = Math.floor(Math.random() * 2)
                    retorno = true
                }
            })
        })
    }
    return retorno
}

function celulasDosNavios(){
    indexNavio = 0
    navios.map(navio => {
        if (indexNavio == 0) {
            celulasDoNavio(indexNavio, navio)
        } else {
            do {
                celulasDoNavio(indexNavio, navio)
            }
            while(colisao(indexNavio))
        }
        indexNavio += 1
    })
}

function celulasDoNavio(indexNavio, navio){
    navios[indexNavio].celulas = []

    switch (navio.sentido) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio))
            var coluna = Math.floor(Math.random() * qtdeColunas)
            adicionarCelula(indexNavio, coluna)

            for (let index = 0; index < tamanhoNavio; index++) {
                linha+= 1
                adicionarCelula(indexNavio, linha, coluna)
            }
            break;

        case 1: 
            var linha = Math.floor(Math.random() * qtdeLinhas)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            adicionarCelula(indexNavio,linha,coluna)        

            for (let index = 0; index < tamanhoNavio-1; index++) {
                coluna += 1
                adicionarCelula(indexNavio,linha,coluna)
            }
            break;
    
       }
}

function adicionarCelula(indexNavio, linha, coluna){
    navios[indexNavio].celulas.push({
        linha, 
        colisao
    })
}

function sentidoDosNavios(){
    navios.map(navio => {
        navio.sentido = Math.floor(Math.random() * 2)
    })
}

function renderizarPlano(){
    
    var linhas = ""
    var elemento = document.getElementById('plano')

    for (let indexLinha = 0; indexLinha < qtdeLinhas; indexLinha++) {
         
        linhas += "<tr>"
        
            for (let indexColuna = 0; indexColuna < qtdeColunas; indexColuna++) {
                
                linhas += `<td class="cell" style="cursor: pointer"
                          id="${indexLinha}.${indexColuna}" 
                          onclick="atirar('${indexLinha}.${indexColuna}')">
                          
                </td>`
            }
        
         linhas += "</tr>"
    }
    elemento.innerHTML = linhas
}

function renderizarNavios(){
    var elemento = document.getElementById('navios')
    var tabela = ''

    navios.map(navio => {
        tabela += '\
        <table style="margin-bottom: 5px;"> \
            <tr> \
        '

        console.log(navios.indexOf(navio))

        navio.celulas.map(celula => {
            tabela += `<td class="cellNavioBranco" id="n${navios.indexOf(navio)}.${celula[0]}.${celula[1]}">
                
            </td>`
        })
        
        tabela += '\
            </tr> \
        </table> \
        ' 
    })
    elemento.innerHTML = tabela
}











console.log(n)
console.log(posicoes)

var qtdeNavios = 6
var navios = []

if (colisao()) {
    console.log("Os navios irão colidir")
} else {
   console.log("Os navios não irão colidir")
}







function definirPosicoes(){
    posicoes.push(Math.floor(Math.random() * 2))
    posicoes.push(Math.floor(Math.random() * 2))
    console.log(posicoes)
}

function celulasNavios(){

    switch (posicoes[0]) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio ))
            cellInicialNavio1.push(linha)
            var coluna = Math.floor(Math.random() * qtdeColunas)
            cellInicialNavio1.push(coluna)
            break;
        case 1:
            var linha = Math.floor(Math.random() * qtdeLinhas)
            cellInicialNavio1.push(linha)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            cellInicialNavio1.push(coluna)
        break;
    }

    switch (posicoes[1]) {
        case 0:
            var linha = Math.floor(Math.random() * (qtdeLinhas - tamanhoNavio ))
            cellInicialNavio2.push(linha)
            var coluna = Math.floor(Math.random() * qtdeColunas)
            cellInicialNavio2.push(coluna)
            break;
        case 1:
            var linha = Math.floor(Math.random() * qtdeLinhas)
            cellInicialNavio2.push(linha)
            var coluna = Math.floor(Math.random() * (qtdeColunas - tamanhoNavio))
            cellInicialNavio2.push(coluna)
        break;
    }
    console.log(cellInicialNavio1)
    console.log(cellInicialNavio2)
}
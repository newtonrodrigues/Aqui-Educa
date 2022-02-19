var numeros = [
    1,
    2,
    3,
    4
]

numeros.push(5)
numeros.push(6)
numeros.push(7)

console.log(numeros[5])

function exibirNumerosFila(){
    for (let index = 0; index < numeros.length; index++) {
        console.log(numeros[index])    
    }
}
exibirNumerosFila()
//Pilha FILO //Fila FIFO // Lista - Tabela de banco de dados, planilha Excell



//PILHA
var nomes = [
"Dan",
"Newton",
"Carlos", 
"Cinthya"
]

function exibirNumerosPilha(){
    for (let index = nomes.length -1; index >= 0; index--){
        console.log(nomes[index])    
    }
}
exibirNumerosPilha()

//LISTA

function inserirNumeros(){
    numeros.push(10),
    numeros.push(15),
    console.log(numeros)
    numeros.shift(10)
    console.log("O número da setima posição do array é: " + numeros[7])
    
}
inserirNumeros()
//DADOS ESTRUTURADOS
aluno = "Newton"
colegas = [
    "Hugo",
    "Alex"
]
colegas.push("Ricardo")
console.log(colegas)
escola2 = {
    nomesAlunos: "José, Carlinhos, Alisson, Renato",
    enderecosAlunos: "Rua A - Rua B - Rua C"
}
console.log(escola2.enderecosAlunos)
var escola = {
    professor: "Dan",
    nomeInstituicao: "Aqui Educa",
    instituicao: {
        nome: "Aqui Educa",
        telefone: "12549",
        email: "a@a.com",
        endereco: "Rua A, n126, aa"  
    },
    Alunos: [
        "João",
        "Rafa",
        "Leo",
        "Newton",
        "Livia"
    ],
}
var uefa = {
    nome: "Real Madrid",
    anos: "1999",
    estadios: ["San Siro",
     "Milão", 
     "Pacaembú"],
    clubes: [{
        nome: "barça, real Madrid, Juve",
        coresTime: "Azul, Vermelho, Branco, Preto", 
        Hino: "Salve os campeões"
    }],
}

uefa.estadios.push["Maraca"]


uefa.clubes.push({
    
    clubes: [{
        nome: "Coringa",
        coresTime: "Azul, Preto", 
        Hino: "Salve os Corinthians"
    }],
})

console.log("RESULTADOS____________________")
console.log(uefa.clubes)
console.log(uefa)
for (let index = 0; index < uefa.clubes.length; index++) {
    console.log(uefa.clubes[0])
    
}
console.log(uefa.estadios)
for (let index = 0; index < uefa.estadios.length; index++) {
    console.log(uefa.estadios[index])
    
}

console.log(escola.professor + ", o professor é esse",
"Os alunos da escola são: " + escola.Alunos, "O telefone da escola é: "
 + escola.instituicao.telefone)

 for (let index = 0; index < escola.Alunos.length; index++) {
    console.log(escola.Alunos[index])
}



console.log(escola.professor)
console.log(escola.instituicao.nome)
console.log(escola.instituicao.email)

var cbf = {
    times: [
    "Bahia",
    "São Paulo",
    "Palmeiras",
    "Flamengo",
    "Vasco",
    "Samtos",
    ]
}













var cbf2 = {
    times: [
        {
            nome: "Bahia",
            coresTimes: [
                "Azul",
                "Vermelho",
                "Branco"
            ],
            hino:"bçlzzass",
            anoFundacao: "1931",
            estadio: "Fonte Nova",
            jogadores: [
                "João Carlos",
                "josé"
            ]
        },
        {
            nome: "Grêmio",
            hino: "greêmio",
            anoFundacao: "1980",
            estadio: "Arena",
            jogadores: [
                "Ewerton Cebolinha",
                "Luan"
            ]
        }
    ]
}
cbf.times.push({
    nome: "Cruzeiro",
    coresTimes: [
        "Azul",
        "Branco"
    ],
    hino:"Salve!",
    anoFundacao: "1921",
    estadio: "Mineirão",
    jogadores: [
        "Ronaldo",
        "Nonato"
    ]
})

for (let index = 0; index < cbf.times.length; index++) {
   
    console.log(cbf.times[index].nome)
}
for (let index = 0; index < cbf2.times.length; index++) {
    console.log(cbf2.times[index].nome)
    
}

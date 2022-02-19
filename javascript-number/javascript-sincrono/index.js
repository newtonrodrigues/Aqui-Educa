//function sum(num1, num2) {
  //  return num1 + num2
//}
//console.log(sum(2, 2))

  /* const sum = (num1, num2) => {
      return num1 + num2
  } */ 

  //IIFE nada vaza do escopo do arquivo, variáveis 
//dentro de uma função pertencem agora ao escopo da 
//função e não mais ao escopo global. Variáveis IIFE se 
//invocam no momento da criação apenas 1 vez. Atribuir
// a uma function e envolvê-la em parênteses e chamá-la 
// com esses parênteses, sem que essa função tenha nome.
// É executada apenas uma vez em sua criação.

/* const person = () => {
  thit.year = 0

  setInterval(() => {
    this.year = this.year + 1
    console.log(this)
    console.log(this.year)
  }, 1000)
}
const p1 = new person() */

/* function newButton(text) {
  const $body = document.querySelector("body")
  const $button = document.createElement("button")
  $button.textContent = text

  $body.insertAdjacentElement("beforeend", $button)
  return $button
} */

/*const login = newButton("Login")
const signup = newButton("Signup")*/

/* function somar(num1, num2) {
  document.getElementById("num1").value
  document.getElementById("num2").value
  var res = parseInt(num1 + num2)
  return toString(res)
} */
  
const community = () => "CollabCode"
console.log(community())

const sum1 = (num1, num2) => num1 + num2
console.log(sum1(2,10))

const double = number => number * 2
console.log(double(5))

const verificarIdade = (year) => {
  if (year >= 18) {
    return "Já pode tomar chopp de vinho!"
  } return "Melhor ficar no Sucrilhos!"
}

(() => {
  const getPerson = () => ({nome: "Newton",
  corOlhos: "Cor dos olhos: Pretos"});

  console.log(getPerson().corOlhos);
})() //IIFE

console.log(verificarIdade(15))



const $button = document.querySelector("button")
  
const handleClick = (num1, num2) => {
  sleep(4000)
  var num1 = document.getElementById("num1").value
  var num2 = document.getElementById("num2").value
  var res = parseInt(num1) + parseInt(num2)
  document.getElementById("resultado").innerText = String(res)
  //console.log("Botão clicado")

}

$button.addEventListener("click", handleClick)  

function sleep(milisegundos){
    const dataAtual = Date.now()
    let dataAtualizada = null
    do {
        dataAtualizada = Date.now()
    } while (dataAtualizada - dataAtual < milisegundos)        
    
}









  


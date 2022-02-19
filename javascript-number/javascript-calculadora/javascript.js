var soma = (num1, num2) => {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var res = parseInt(num1) + parseInt(num2)
    document.getElementById("resultado").innerText = res
}

var sub = (num1, num2) => {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var res = parseInt(num1) - parseInt(num2)
    document.getElementById("resultado").innerText = String(res)
    
}
var div = (num1, num2) => {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var res = parseInt(num1) / parseInt(num2)
    document.getElementById("resultado").innerText = res
}
var multi = (num1, num2) =>{
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var res = parseInt(num1) * parseInt(num2)
    document.getElementById("resultado").innerText = res
}
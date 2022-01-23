
    function abrirMensagens(){
        alert(document.getElementById("campo").value)
    }

    function vermelho(){
        document.getElementById("texto").style.color = "red"
    }

    function verde(){
        document.getElementById("numero").style.color = "purple"
    }

    function azul(){
        document.getElementById("texto").style.color = "blue"
    }

    function rosa(){
        document.getElementById("texto").style.color = "pink"
    }

    function exponencial(){
        var numero = document.getElementById("numero").value

            for (let index = 0; index < 10; index++) {
            numero = numero * 2
            console.log(numero)
        }
    }

    function soma(){
         num1 = document.getElementById("num1").value
         num2 = document.getElementById("num2").value
         res = parseInt(num1) + parseInt(num2)
         document.getElementById("resultado").value = res
    }

    function subtracao(){
        num1 = document.getElementById("num1").value
        num2 = document.getElementById("num2").value
        res  = parseInt(num1) - parseInt(num2)
        document.getElementById("resultado").value = res
        console.log(res)
    }
    
    function divisao(){
        num1 = document.getElementById("num1").value
        num2 = document.getElementById("num2").value
        res = parseInt(num1) / parseInt(num2)
        document.getElementById("resultado").value = res
        alert(res)
    }

    function multiplicacao(){
        num1 = document.getElementById("num1").value
        num2 = document.getElementById("num2").value
        res = parseInt(num1) * parseInt(num2)
        document.getElementById("resultado").value = res
        alert(res)
        console.log(res)
    }


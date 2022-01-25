
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
         document.getElementById("resultado").innerText = res
    }

    function subtracao(){
        num1 = document.getElementById("num1").value
        num2 = document.getElementById("num2").value
        res  = parseInt(num1) - parseInt(num2)
        document.getElementById("resultado").innerText = res
        console.log(res)
    }
    
    function divisao(){
        num1 = document.getElementById("num1").value
        num2 = document.getElementById("num2").value
        res = parseInt(num1) / parseInt(num2)
        document.getElementById("resultado").innerText = res
        alert(res)
    }

    function multiplicacao(){
        num1 = document.getElementById("num1").value
        num2 = document.getElementById("num2").value
        res = parseInt(num1) * parseInt(num2)
        document.getElementById("resultado").innerText = res
        alert(res)
        console.log(res)
    }

    
    var numero = 0
    
    function clique(celula){
       // alert("Oi")
       // alert(Math.floor(Math.random() * 4));
       //randomico()
      // alert(numero)
   if (numero == celula) {
      while(numero == celula){
          randomico()
      }

      document.getElementById(String(numero)).innerText = "Clique Aqui"
      document.getElementById(String(celula)).innerText = ''

     // alert(numero)
    
    } else {
        exibirMensagem()
    }
}

function exibirMensagem(){
    frases = [
        'Bah!',
        'Jezuiz!',
        'Vish',
        'Noss Sinhora!',
        'Cristo',
        'Oh Maluco!',
    ]
    numerorandom = Math.floor(Math.random() * frases.length)
    alert(frases[numerorandom])
}

    function randomico(){
        numero = Math.floor(Math.random() * 4)

    }

    function clique2(){
        alert("Oi2")
    }

    function clique3(){
        alert("Oi3")
    }

    function clique4() {
        alert("Oi4")
    }

    function imprimir() {
        var num1 = "1.5"
        var num2 = "2"
        alert(document.getElementById("resultado").innerText)
        alert(parseFloat(num1) + parseFloat(num2))
    }

    function exibirTime(){
        
        selecao = document.getElementById("time").value
        //alert(selecao)
        switch (selecao) {
            case "1":
                console.log("Seu time é o Bahia")
                    break;
            case "2":
                console.log("São Paulo") 
                    break;
            case "3":
                console.log("Flamengo!")
                    break;
            case "4":
                console.log("Cruzeiro!")
                alert("Cruzeiro!")
                    break;
            default:
                console.log("Não tem time")
                break;
        }

      /*  function elementos(){
    var elemento = document.getElementById("elemento")
    elemento.innerText = "Conteúdo"
    elemento.style.color = "blue"
    elemento.style.backgroundColor = "black"
    elemento.style.borderColor = "red"
    elemento.style.borderStyle = "solid"
    elemento.style.borderWidth = "4px" */
        }

        function aplicar(){
            qualquerUma.innerText = document.getElementById("texto").value
            qualquerUma.style.color = document.getElementById("corTexto").value
            qualquerUma.style.backgroundColor = document.getElementById("corFundo").value
            qualquerUma.style.width = document.getElementById("largura").value
            qualquerUma.style.height = document.getElementById("altura").value
            qualquerUma.style.fontSize = document.getElementById("tamTexto").value
            qualquerUma.style.borderColor = document.getElementById("corBorda").value
            qualquerUma.style.borderStyle = document.getElementById("estiloBorda").value
            qualquerUma.style.borderWidth = document.getElementById("larguraBorda").value
            qualquerUma.style.fontWeight = document.getElementById("negrito").value
    }

        

    






    function incrementar(){
        var numero = document.getElementById("numero").innerText
        var novoNumero = parseInt(numero) + 1
        if(novoNumero >= 0)
        document.getElementById("numero").innerText = String(novoNumero)
    } 
    function decrementar(){
       var numero = document.getElementById("numero").innerText
       var novoNumero = parseInt(numero) - 1
       if(novoNumero >= 0){
       document.getElementById("numero").innerText = String(novoNumero)
    } else {
        
        alert("Valor não permitido")}}

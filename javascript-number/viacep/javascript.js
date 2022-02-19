//const { cp } = require("fs")

function endereco(){
   var cep = document.getElementById("cep")
   //alert(cep.value)
   var url = "http://viacep.com.br/ws/"+ cep.value +"/json/"

   var logradouro = document.getElementById("logradouro")
   var complemento = document.getElementById("complemento")
   var bairro = document.getElementById("bairro")
   var localidade = document.getElementById("localidade")
   var uf = document.getElementById("uf")

    fetch(url, {method: 'GET'})
        .then(response => {
            response.json()
                .then(data => {
                    console.log(data)
                    
                    logradouro.value = data.logradouro
                    if(data.complemento == ""){
                        complemento.value = "Não possui complemento"
                    } else {
                        complemento.value = data.complemento   
                    }
                    bairro.value = data.bairro
                    localidade.value = data.localidade
                    uf.value = data.uf
                })
        })
    .catch(err => {
        logradouro.value = ""
        complemento.value = ""
        bairro.value = ""
        localidade.value = ""
        uf.value = ""
        alert("CEP não encontrado")
    })
    
}
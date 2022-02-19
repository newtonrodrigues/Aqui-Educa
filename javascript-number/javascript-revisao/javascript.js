//const { type } = require("os")

var button = document.getElementById("botao")
button.addEventListener('click', () => {
    console.log("oi")
})

function funcao() {
    console.log("Olá")
}

function createField(field = {}) {
    if (field.required)  

    render('span', {style: 'color: red; font-size: 10px; margin-right: 5px'}, '*')
    render('label', {}, field.label)
    render('br', {}, null)
    render('input', {id: field.id, type: field.type, style: `color: ${field.color}; visibility: ${field.visibility}`}, null)
    render('br', {}, null)
    render('br', {}, null)
}

function render(tagName, attributes = {}, text){
    const elemento = document.createElement(tagName)
    Object.assign(elemento, attributes)
    if (text) {
        elemento.appendChild(document.createTextNode(text))
    } 
    document.getElementById("render").appendChild(elemento)
}

function abrirAlerta(){
    alert("Olá")
}

function createForm(form = {}){
   
    render('h1', {}, form.title)
    render('br', { }, null)

    form.fields.map(f => {
        createField(f)
    })
    form.buttons.map(b => {
        render('button', { id: b.id }, b.label)
        if (b.click) 
            document.getElementById(b.id).setAttribute('onclick',b.click)
    })
}

createForm({
    title: 'Cadastro de clientes',
    fields: [
        {
            label: "Nome",
            type: "text",
            id: "nome",
            required: true,
            color: "red",
            visibility: 'visible'
        },
        {
            label: "Telefone",
            type: "text",
            id: "telefone",
            required: false,
            color: "blue",
            visibility: 'hidden'
        },
        {
            label: "Senha",
            type: "password",
            id: "senha",
            required: true,
            color: "green",
            visibility: 'hidden'
        }
    ],
        buttons: [
            {
                type: "Save",
                label: "Salvar",
                click: "abrirAlerta()",
                id: "salvar"
            },
            {
            type: "Back",
            label: "Voltar",
            click: "",
            id: "voltar"
            }

        ]
}) 

function abrirAlerta(){
    alert("Olá")
}
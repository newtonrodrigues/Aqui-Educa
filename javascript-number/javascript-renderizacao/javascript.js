/* render = () => {
    var elemento = document.getElementById("renderizacao")
    elemento.innerHTML = "<h1>Oi, esse é o texto</h1>"
}

render() */

render('span', { id: "meuSpan" }, "Digite seu texto aqui")
render('br', {}, null)
render('input', { id: "nome", type: "text" }, null)
render('br', {}, null)
render('br', {}, null)
render('button', { id: "buttun"}, "Mais informacoes" )
render('br', {}, null)
render('br', {}, null)


/* createField({
    label: 'Nome',
    type: 'text',
    id: "nome"
}) */

/* createField({
    label: 'Telefone',
    type: 'text',
    id: "telefone"
}) */

createForm({
    title: 'Cadastro de Clientes',
    fields: [
        {
            label: 'Telefone',
            type: 'text',
            id: "telefone"
        },
        {
            label: 'Telefone',
            type: 'text',
            id: "telefone"
        }
    ], 
    buttons: [
        {
            type: 'Save',
            label: 'Salvar',
            click: 'abrirAlerta()',

        },
        {
            type: 'Back',
            label: 'Voltar',
            click: '',
        }
    ]
})

function createForm(form = {}){
    render('h1', {}, form.title)
    render('br', {}, null)
    

    

    form.fields.map(f => {
        createField(f)
    })

    form.buttons.map(b =>{
        if (b.click) {
            render('button', { onclick: b.click }, b.label)
        } else 
            render('button', {}, b.label)    
        
        
    })
}

function abrirAlerta(){
    alert("Olá")
}

function createField(field = {}){
    render('label', {}, field.label)
    render('br', {}, null)
    render('input', { id: field.id, type: field.type}, null )
    render('br', {}, null)
    render('br', {}, null)
}


function render(tagName, attributes = {}, text) {
    const elemento = document.createElement(tagName)
    Object.assign(elemento.attributes)
    if (text) {
        elemento.appendChild(document.createTextNode(text))
    }
    document.getElementById("renderizacao").appendChild(elemento)
    
}

const fs = require('fs')


/* function callback(err, contents){
    console.log(err, String(contents))
} 1 forma */

/* fs.readFile('./tex1.txt', (err, contents) => {
    console.log(err, String(contents))
}) 2 forma de realizar uma callback*/ 


 console.log(1)
//fs.readFile('./tex1.txt', callback) 1 forma
console.log(2)
console.log(5) 

const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})
/* readFile('./tex1.txt').then( contents => {
    console.log(String(contents))
}) Promisses */

//setTimeout(() => console.log(promessa), 1000)

/*readFile('./tex1.txt') .then( contents => {
    console.log(null, String(contents))
}) 3 forma, utilizando Promisses*/
const init = async() => {
    try{
        const contents = await readFile('./tex1.txt')
       // console.log(String(contents))
        return String(contents)
    }catch(err){
        console.log(err)
    }
}

//console.log('init', init())
init().then(contents => console.log(contents))
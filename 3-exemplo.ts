import fs from 'fs'

console.log('Antes de ler o arquivo')

const texto1 = fs.readFileSync('./texto.txt')
console.log(texto1.toString())

fs.writeFileSync('./texto.txt', 'Um novo texto para o arquivo!')

const texto1Editado = fs.readFileSync('./texto.txt')
console.log(texto1Editado.toString())

console.log('Depois de ler o arquivo')


// setTimeout(() => {
//     console.log('Primeira etapa')

// }, 3000);

// setTimeout(() => {
//     console.log('segunda etapa')
// }, 5000);

// console.log('terceira etapa')

//Promessas (promises)

// Pending -> Pendente | Fulfiled -> Resolvida | Rejected -> Rejeitada

// setTimeout(() => {
console.log('Primeira etapa')

// }, 3000);

async function imprimir(texto) {
    return new Promise((resolver, rejeitar) => {
        resolver(texto)
    })
}

// console.log(imprimir('Segunda etapa'))

imprimir('segunda etapa').then((resultado) => {
    console.log(resultado)
})

console.log('terceira etapa')
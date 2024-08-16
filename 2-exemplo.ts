function vericaIdade(idade) {
    return new Promise((resolve, rejetct) => {
        if (idade > 17) {
            resolve(`${idade} anos está liberada`)
            return
        }
        rejetct(`Você é de menor, pois tem ${idade} anos`)
    })
}

console.log('Iniciou a fila da festa')

vericaIdade(18).then((resultado) => {
    console.log(resultado)
}).catch((erro) => {
    console.log(erro)
}).finally(() => {
    console.log('Este console.log foi executado ao final da resolução ou da rejeição da promessa')
})

vericaIdade(19).then((resultado) => {
    console.log(resultado)
}).catch((erro) => {
    console.log(erro)
})

vericaIdade(16).then((resultado) => {
    console.log(resultado)
}).catch((erro) => {
    console.log(erro)
})

console.log('Final da fila')